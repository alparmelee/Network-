"""Local CompTIA Network+ study app.

Double-click start.bat, or run: python server.py
Then open http://127.0.0.1:8765

Notes live in data/networkplus.db while you study.
data/content.json is the static copy of those notes, and that file is what belongs on GitHub.
Delete the database and start again to rebuild it from content.json.
"""

from __future__ import annotations

import json
import os
import re
import socket
import sqlite3
import threading
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
STATIC = ROOT / "static"
DB_PATH = Path(os.environ["NETWORKPLUS_DB"]) if os.environ.get("NETWORKPLUS_DB") else ROOT / "data" / "networkplus.db"
CONTENT_PATH = ROOT / "data" / "content.json"
PORT = int(os.environ.get("NETWORKPLUS_PORT", "8765"))
HOST = "127.0.0.1"

SCHEMA = """
CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS chapters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number INTEGER NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  exam_percent INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS sections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter_id INTEGER NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS terms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  definition TEXT NOT NULL,
  image_url TEXT NOT NULL DEFAULT '',
  category_id INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  parent_id INTEGER,
  name TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_sections_chapter ON sections(chapter_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_terms_section ON terms(section_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_categories_section ON categories(section_id, sort_order);
"""


def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA busy_timeout = 3000")
    conn.execute("PRAGMA synchronous = FULL")
    return conn


def init_db():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = connect()
    try:
        conn.executescript(SCHEMA)
        migrate(conn)
        seeded = conn.execute("SELECT value FROM meta WHERE key = 'seeded'").fetchone()
        if seeded is None:
            seed(conn)
            conn.execute("INSERT INTO meta (key, value) VALUES ('seeded', '1')")
            conn.commit()
        else:
            conn.commit()
            write_content(conn)
    finally:
        conn.close()


def migrate(conn):
    columns = {row["name"] for row in conn.execute("PRAGMA table_info(terms)")}
    if "category_id" not in columns:
        conn.execute("ALTER TABLE terms ADD COLUMN category_id INTEGER")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_terms_category ON terms(category_id)")
    category_columns = {row["name"] for row in conn.execute("PRAGMA table_info(categories)")}
    if "parent_id" not in category_columns:
        conn.execute("ALTER TABLE categories ADD COLUMN parent_id INTEGER")
    conn.execute("DROP INDEX IF EXISTS idx_categories_unique_name")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_categories_parent ON categories(section_id, parent_id, sort_order)")


def write_content(conn):
    CONTENT_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(backup(conn), ensure_ascii=False, indent=2)
    payload = payload.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029") + "\n"
    temporary = CONTENT_PATH.with_suffix(".json.tmp")
    temporary.write_text(payload, encoding="utf-8")
    temporary.replace(CONTENT_PATH)
    notes = STATIC / "notes.js"
    notes_tmp = notes.with_suffix(".js.tmp")
    notes_tmp.write_text("window.NETWORK_PLUS = " + payload, encoding="utf-8")
    notes_tmp.replace(notes)


def commit_changes(conn):
    conn.commit()
    write_content(conn)


def seed(conn):
    if not CONTENT_PATH.is_file():
        raise RuntimeError("data/content.json is missing. That file holds the notes.")
    restore(conn, json.loads(CONTENT_PATH.read_text(encoding="utf-8")), snapshot=False)


def clean_text(value, label, limit, required=True):
    text = str(value or "").strip()
    if required and not text:
        raise ValueError(f"{label} is required")
    if len(text) > limit:
        raise ValueError(f"{label} is too long")
    return text


def clean_number(value, label, low, high):
    try:
        number = int(value)
    except (TypeError, ValueError):
        raise ValueError(f"{label} must be a number")
    if number < low or number > high:
        raise ValueError(f"{label} must be from {low} to {high}")
    return number


def clean_percent(value):
    if value is None or str(value).strip() == "":
        return None
    return clean_number(value, "Exam percent", 0, 100)


def clean_code(value):
    code = clean_text(value, "Section number", 20)
    if not re.fullmatch(r"[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)*", code):
        raise ValueError("Use a section number like 1.1")
    return code


def clean_image(value):
    url = str(value or "").strip()
    if not url:
        return ""
    if len(url) > 2000:
        raise ValueError("Image address is too long")
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https") or not parsed.netloc:
        raise ValueError("Image address must start with http:// or https://")
    return url


def integrity_message(exc):
    text = str(exc)
    if "chapters.number" in text:
        return "A chapter with that number already exists."
    if "sections.code" in text:
        return "A section with that number already exists."
    if "categories" in text:
        return "A category with that name is already on this page."
    return "That conflicts with something already saved."


def rows(conn, sql, params=()):
    return [dict(row) for row in conn.execute(sql, params).fetchall()]


def one(conn, sql, params=()):
    row = conn.execute(sql, params).fetchone()
    return dict(row) if row else None


def tree(conn):
    chapters = rows(conn, "SELECT * FROM chapters ORDER BY sort_order, number, id")
    sections = rows(conn, "SELECT * FROM sections ORDER BY sort_order, code, id")
    terms = rows(conn, "SELECT id, section_id, name FROM terms ORDER BY sort_order, id")
    categories = rows(conn, "SELECT id, section_id, parent_id, name FROM categories ORDER BY sort_order, id")
    terms_by_section = {}
    for term in terms:
        terms_by_section.setdefault(term["section_id"], []).append(
            {"id": term["id"], "name": term["name"]}
        )
    categories_by_section = {}
    for category in categories:
        categories_by_section.setdefault(category["section_id"], []).append(
            {"id": category["id"], "parent_id": category["parent_id"], "name": category["name"]}
        )
    sections_by_chapter = {}
    for section in sections:
        section["categories"] = categories_by_section.get(section["id"], [])
        section["terms"] = terms_by_section.get(section["id"], [])
        section["term_count"] = len(section["terms"])
        sections_by_chapter.setdefault(section["chapter_id"], []).append(section)
    for chapter in chapters:
        chapter["sections"] = sections_by_chapter.get(chapter["id"], [])
        chapter["term_count"] = sum(section["term_count"] for section in chapter["sections"])
    return {"chapters": chapters, "db_path": str(DB_PATH)}


def chapter_detail(conn, chapter_id):
    chapter = one(conn, "SELECT * FROM chapters WHERE id = ?", (chapter_id,))
    if not chapter:
        return None
    chapter["sections"] = rows(
        conn,
        "SELECT * FROM sections WHERE chapter_id = ? ORDER BY sort_order, code, id",
        (chapter_id,),
    )
    chapter["terms"] = rows(
        conn,
        """
        SELECT t.*, s.code AS section_code, s.title AS section_title,
               c.name AS category_name, p.name AS parent_category_name
        FROM terms t
        JOIN sections s ON s.id = t.section_id
        LEFT JOIN categories c ON c.id = t.category_id
        LEFT JOIN categories p ON p.id = c.parent_id
        WHERE s.chapter_id = ?
        ORDER BY s.sort_order, s.code, t.sort_order, t.id
        """,
        (chapter_id,),
    )
    return chapter


def section_detail(conn, section_id):
    section = one(conn, "SELECT * FROM sections WHERE id = ?", (section_id,))
    if not section:
        return None
    chapter = one(conn, "SELECT * FROM chapters WHERE id = ?", (section["chapter_id"],))
    categories = rows(
        conn,
        "SELECT * FROM categories WHERE section_id = ? ORDER BY sort_order, id",
        (section_id,),
    )
    terms = rows(
        conn,
        """
        SELECT t.*, c.name AS category_name, p.name AS parent_category_name
        FROM terms t
        LEFT JOIN categories c ON c.id = t.category_id
        LEFT JOIN categories p ON p.id = c.parent_id
        WHERE t.section_id = ?
        ORDER BY t.sort_order, t.id
        """,
        (section_id,),
    )
    siblings = rows(
        conn,
        "SELECT id, code, title FROM sections WHERE chapter_id = ? ORDER BY sort_order, code, id",
        (section["chapter_id"],),
    )
    return {
        "section": section,
        "chapter": chapter,
        "categories": categories,
        "terms": terms,
        "siblings": siblings,
    }


def save_chapter(conn, payload, chapter_id=None):
    number = clean_number(payload.get("number"), "Chapter number", 1, 99)
    title = clean_text(payload.get("title"), "Title", 160)
    summary = clean_text(payload.get("summary"), "Summary", 600, required=False)
    percent = clean_percent(payload.get("exam_percent"))
    if chapter_id is None:
        sort = conn.execute("SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM chapters").fetchone()["n"]
        cur = conn.execute(
            """
            INSERT INTO chapters (number, title, summary, exam_percent, sort_order)
            VALUES (?, ?, ?, ?, ?)
            """,
            (number, title, summary, percent, sort),
        )
        return cur.lastrowid
    if not one(conn, "SELECT id FROM chapters WHERE id = ?", (chapter_id,)):
        raise LookupError("Chapter not found")
    conn.execute(
        """
        UPDATE chapters
        SET number = ?, title = ?, summary = ?, exam_percent = ?
        WHERE id = ?
        """,
        (number, title, summary, percent, chapter_id),
    )
    return chapter_id


def save_section(conn, payload, section_id=None):
    code = clean_code(payload.get("code"))
    title = clean_text(payload.get("title"), "Title", 180)
    summary = clean_text(payload.get("summary"), "Summary", 800, required=False)
    if section_id is None:
        chapter_id = clean_number(payload.get("chapter_id"), "Chapter", 1, 10**9)
        if not one(conn, "SELECT id FROM chapters WHERE id = ?", (chapter_id,)):
            raise ValueError("Pick a chapter for this section")
        sort = conn.execute(
            "SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM sections WHERE chapter_id = ?",
            (chapter_id,),
        ).fetchone()["n"]
        cur = conn.execute(
            """
            INSERT INTO sections (chapter_id, code, title, summary, sort_order)
            VALUES (?, ?, ?, ?, ?)
            """,
            (chapter_id, code, title, summary, sort),
        )
        return cur.lastrowid
    if not one(conn, "SELECT id FROM sections WHERE id = ?", (section_id,)):
        raise LookupError("Section not found")
    conn.execute(
        "UPDATE sections SET code = ?, title = ?, summary = ? WHERE id = ?",
        (code, title, summary, section_id),
    )
    return section_id


def clean_category_id(conn, value, section_id):
    if value is None or str(value).strip() == "":
        return None
    try:
        category_id = int(value)
    except (TypeError, ValueError):
        raise ValueError("Pick a category on this page")
    row = one(conn, "SELECT section_id FROM categories WHERE id = ?", (category_id,))
    if not row or row["section_id"] != int(section_id):
        raise ValueError("Pick a category on this page")
    return category_id


def clean_parent_id(conn, value, section_id):
    if value is None or str(value).strip() == "":
        return None
    try:
        parent_id = int(value)
    except (TypeError, ValueError):
        raise ValueError("Pick a category on this page")
    parent = one(conn, "SELECT id, section_id, parent_id FROM categories WHERE id = ?", (parent_id,))
    if not parent or parent["section_id"] != int(section_id):
        raise ValueError("Pick a category on this page")
    if parent["parent_id"]:
        raise ValueError("Add subcategories under a main category")
    return parent_id


def category_name_taken(conn, section_id, name, parent_id, ignore_id=None):
    if parent_id is None:
        sql = """
            SELECT id FROM categories
            WHERE section_id = ? AND parent_id IS NULL AND name = ? COLLATE NOCASE
        """
        params = [section_id, name]
    else:
        sql = """
            SELECT id FROM categories
            WHERE section_id = ? AND parent_id = ? AND name = ? COLLATE NOCASE
        """
        params = [section_id, parent_id, name]
    if ignore_id is not None:
        sql += " AND id != ?"
        params.append(ignore_id)
    return conn.execute(sql, params).fetchone()


def save_category(conn, payload, category_id=None):
    name = clean_text(payload.get("name"), "Category name", 80)
    summary = clean_text(payload.get("summary"), "Description", 400, required=False)
    if category_id is None:
        section_id = clean_number(payload.get("section_id"), "Section", 1, 10**9)
        if not one(conn, "SELECT id FROM sections WHERE id = ?", (section_id,)):
            raise ValueError("That section page no longer exists")
        parent_id = clean_parent_id(conn, payload.get("parent_id"), section_id)
        if category_name_taken(conn, section_id, name, parent_id):
            raise ValueError("A category with that name is already here.")
        if parent_id is None:
            sort = conn.execute(
                """
                SELECT COALESCE(MAX(sort_order), -1) + 1 AS n
                FROM categories WHERE section_id = ? AND parent_id IS NULL
                """,
                (section_id,),
            ).fetchone()["n"]
        else:
            sort = conn.execute(
                """
                SELECT COALESCE(MAX(sort_order), -1) + 1 AS n
                FROM categories WHERE section_id = ? AND parent_id = ?
                """,
                (section_id, parent_id),
            ).fetchone()["n"]
        cur = conn.execute(
            """
            INSERT INTO categories (section_id, parent_id, name, summary, sort_order)
            VALUES (?, ?, ?, ?, ?)
            """,
            (section_id, parent_id, name, summary, sort),
        )
        return cur.lastrowid
    row = one(conn, "SELECT id, section_id, parent_id FROM categories WHERE id = ?", (category_id,))
    if not row:
        raise LookupError("Category not found")
    if category_name_taken(conn, row["section_id"], name, row["parent_id"], category_id):
        raise ValueError("A category with that name is already here.")
    conn.execute(
        "UPDATE categories SET name = ?, summary = ? WHERE id = ?",
        (name, summary, category_id),
    )
    return category_id


def save_term(conn, payload, term_id=None):
    name = clean_text(payload.get("name"), "Term", 160)
    definition = clean_text(payload.get("definition"), "Definition", 8000)
    image_url = clean_image(payload.get("image_url"))
    if term_id is None:
        section_id = clean_number(payload.get("section_id"), "Section", 1, 10**9)
        if not one(conn, "SELECT id FROM sections WHERE id = ?", (section_id,)):
            raise ValueError("That section page no longer exists")
        category_id = clean_category_id(conn, payload.get("category_id"), section_id)
        sort = conn.execute(
            "SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM terms WHERE section_id = ?",
            (section_id,),
        ).fetchone()["n"]
        cur = conn.execute(
            """
            INSERT INTO terms (section_id, name, definition, image_url, category_id, sort_order)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (section_id, name, definition, image_url, category_id, sort),
        )
        return cur.lastrowid
    current = one(conn, "SELECT id, section_id FROM terms WHERE id = ?", (term_id,))
    if not current:
        raise LookupError("Term not found")
    category_id = clean_category_id(conn, payload.get("category_id"), current["section_id"])
    conn.execute(
        "UPDATE terms SET name = ?, definition = ?, image_url = ?, category_id = ? WHERE id = ?",
        (name, definition, image_url, category_id, term_id),
    )
    return term_id


def reorder(conn, kind, ids):
    if not isinstance(ids, list) or not ids:
        raise ValueError("Nothing to reorder")
    try:
        ordered = [int(item) for item in ids]
    except (TypeError, ValueError):
        raise ValueError("Could not read that order")
    if len(set(ordered)) != len(ordered):
        raise ValueError("That order has a duplicate")
    if kind == "chapters":
        existing = {row["id"] for row in conn.execute("SELECT id FROM chapters")}
        if set(ordered) != existing:
            raise ValueError("The chapter list changed. Refresh and try again.")
        for index, item_id in enumerate(ordered):
            conn.execute("UPDATE chapters SET sort_order = ? WHERE id = ?", (index, item_id))
        return
    if kind == "sections":
        found = rows(
            conn,
            f"SELECT id, chapter_id FROM sections WHERE id IN ({','.join('?' for _ in ordered)})",
            ordered,
        )
        chapters = {row["chapter_id"] for row in found}
        if len(found) != len(ordered) or len(chapters) != 1:
            raise ValueError("Those sections are not in the same chapter")
        chapter_id = chapters.pop()
        all_ids = {row["id"] for row in conn.execute("SELECT id FROM sections WHERE chapter_id = ?", (chapter_id,))}
        if set(ordered) != all_ids:
            raise ValueError("The section list changed. Refresh and try again.")
        for index, item_id in enumerate(ordered):
            conn.execute("UPDATE sections SET sort_order = ? WHERE id = ?", (index, item_id))
        return
    if kind == "terms":
        found = rows(
            conn,
            f"SELECT id, section_id FROM terms WHERE id IN ({','.join('?' for _ in ordered)})",
            ordered,
        )
        sections = {row["section_id"] for row in found}
        if len(found) != len(ordered) or len(sections) != 1:
            raise ValueError("Those terms are not on the same page")
        section_id = sections.pop()
        all_ids = {row["id"] for row in conn.execute("SELECT id FROM terms WHERE section_id = ?", (section_id,))}
        if set(ordered) != all_ids:
            raise ValueError("The term list changed. Refresh and try again.")
        for index, item_id in enumerate(ordered):
            conn.execute("UPDATE terms SET sort_order = ? WHERE id = ?", (index, item_id))
        return
    if kind == "categories":
        found = rows(
            conn,
            f"SELECT id, section_id, parent_id FROM categories WHERE id IN ({','.join('?' for _ in ordered)})",
            ordered,
        )
        sections = {row["section_id"] for row in found}
        parents = {row["parent_id"] for row in found}
        if len(found) != len(ordered) or len(sections) != 1 or len(parents) != 1:
            raise ValueError("Those categories are not in the same group")
        section_id = sections.pop()
        parent_id = parents.pop()
        if parent_id is None:
            sibling_rows = conn.execute(
                "SELECT id FROM categories WHERE section_id = ? AND parent_id IS NULL",
                (section_id,),
            )
        else:
            sibling_rows = conn.execute(
                "SELECT id FROM categories WHERE section_id = ? AND parent_id = ?",
                (section_id, parent_id),
            )
        all_ids = {row["id"] for row in sibling_rows}
        if set(ordered) != all_ids:
            raise ValueError("The category list changed. Refresh and try again.")
        for index, item_id in enumerate(ordered):
            conn.execute("UPDATE categories SET sort_order = ? WHERE id = ?", (index, item_id))
        return
    raise ValueError("Unknown list")


def backup(conn):
    chapters = rows(conn, "SELECT * FROM chapters ORDER BY sort_order, number, id")
    for chapter in chapters:
        chapter["sections"] = rows(
            conn,
            "SELECT * FROM sections WHERE chapter_id = ? ORDER BY sort_order, code, id",
            (chapter["id"],),
        )
        for section in chapter["sections"]:
            section["categories"] = rows(
                conn,
                "SELECT * FROM categories WHERE section_id = ? ORDER BY sort_order, id",
                (section["id"],),
            )
            section["terms"] = rows(
                conn,
                "SELECT * FROM terms WHERE section_id = ? ORDER BY sort_order, id",
                (section["id"],),
            )
    return {"format": 1, "chapters": chapters}


def restore(conn, payload, snapshot=True):
    if not isinstance(payload, dict) or payload.get("format") != 1 or not isinstance(payload.get("chapters"), list):
        raise ValueError("That file is not a Network+ backup")
    cleaned = []
    for index, chapter in enumerate(payload["chapters"]):
        if not isinstance(chapter, dict):
            raise ValueError("A chapter in that backup is unreadable")
        sections = chapter.get("sections") or []
        if not isinstance(sections, list):
            raise ValueError("A chapter in that backup is unreadable")
        cleaned_sections = []
        for section_index, section in enumerate(sections):
            if not isinstance(section, dict):
                raise ValueError("A section in that backup is unreadable")
            raw_categories = section.get("categories") or []
            if not isinstance(raw_categories, list) or not isinstance(section.get("terms") or [], list):
                raise ValueError("A section in that backup is unreadable")
            cleaned_categories = []
            for category_index, category in enumerate(raw_categories):
                if not isinstance(category, dict):
                    raise ValueError("A category in that backup is unreadable")
                cleaned_categories.append(
                    {
                        "backup_id": category.get("id"),
                        "parent_backup_id": category.get("parent_id"),
                        "name": clean_text(category.get("name"), "Category name", 80),
                        "summary": clean_text(category.get("summary"), "Description", 400, required=False),
                        "sort_order": category_index,
                    }
                )
            terms = section.get("terms") or []
            cleaned_terms = []
            for term_index, term in enumerate(terms):
                if not isinstance(term, dict):
                    raise ValueError("A term in that backup is unreadable")
                cleaned_terms.append(
                    {
                        "name": clean_text(term.get("name"), "Term", 160),
                        "definition": clean_text(term.get("definition"), "Definition", 8000),
                        "image_url": clean_image(term.get("image_url")),
                        "category_backup_id": term.get("category_id"),
                        "sort_order": term_index,
                    }
                )
            cleaned_sections.append(
                {
                    "code": clean_code(section.get("code")),
                    "title": clean_text(section.get("title"), "Title", 180),
                    "summary": clean_text(section.get("summary"), "Summary", 800, required=False),
                    "sort_order": section_index,
                    "categories": cleaned_categories,
                    "terms": cleaned_terms,
                }
            )
        cleaned.append(
            {
                "number": clean_number(chapter.get("number"), "Chapter number", 1, 99),
                "title": clean_text(chapter.get("title"), "Title", 160),
                "summary": clean_text(chapter.get("summary"), "Summary", 600, required=False),
                "exam_percent": clean_percent(chapter.get("exam_percent")),
                "sort_order": index,
                "sections": cleaned_sections,
            }
        )
    try:
        conn.execute("DELETE FROM terms")
        conn.execute("DELETE FROM categories")
        conn.execute("DELETE FROM sections")
        conn.execute("DELETE FROM chapters")
        for chapter in cleaned:
            cur = conn.execute(
                """
                INSERT INTO chapters (number, title, summary, exam_percent, sort_order)
                VALUES (?, ?, ?, ?, ?)
                """,
                (chapter["number"], chapter["title"], chapter["summary"], chapter["exam_percent"], chapter["sort_order"]),
            )
            for section in chapter["sections"]:
                sec = conn.execute(
                    """
                    INSERT INTO sections (chapter_id, code, title, summary, sort_order)
                    VALUES (?, ?, ?, ?, ?)
                    """,
                    (cur.lastrowid, section["code"], section["title"], section["summary"], section["sort_order"]),
                )
                category_ids = {}
                pending_children = []
                for category in section.get("categories") or []:
                    if category.get("parent_backup_id") is not None:
                        pending_children.append(category)
                        continue
                    cat = conn.execute(
                        """
                        INSERT INTO categories (section_id, parent_id, name, summary, sort_order)
                        VALUES (?, NULL, ?, ?, ?)
                        """,
                        (sec.lastrowid, category["name"], category["summary"], category["sort_order"]),
                    )
                    if category["backup_id"] is not None:
                        category_ids[category["backup_id"]] = cat.lastrowid
                for category in pending_children:
                    cat = conn.execute(
                        """
                        INSERT INTO categories (section_id, parent_id, name, summary, sort_order)
                        VALUES (?, ?, ?, ?, ?)
                        """,
                        (
                            sec.lastrowid,
                            category_ids.get(category.get("parent_backup_id")),
                            category["name"],
                            category["summary"],
                            category["sort_order"],
                        ),
                    )
                    if category["backup_id"] is not None:
                        category_ids[category["backup_id"]] = cat.lastrowid
                for term in section["terms"]:
                    conn.execute(
                        """
                        INSERT INTO terms (section_id, name, definition, image_url, category_id, sort_order)
                        VALUES (?, ?, ?, ?, ?, ?)
                        """,
                        (
                            sec.lastrowid,
                            term["name"],
                            term["definition"],
                            term["image_url"],
                            category_ids.get(term.get("category_backup_id")),
                            term["sort_order"],
                        ),
                    )
        conn.commit()
        if snapshot:
            write_content(conn)
    except Exception:
        conn.rollback()
        raise


class StudyServer(ThreadingHTTPServer):
    allow_reuse_address = True


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        return

    def do_GET(self):
        self.route("GET")

    def do_POST(self):
        self.route("POST")

    def do_PUT(self):
        self.route("PUT")

    def do_DELETE(self):
        self.route("DELETE")

    def route(self, method):
        try:
            path = urlparse(self.path).path
            if path.startswith("/api/"):
                self.route_api(method, path.rstrip("/") or "/")
            elif method == "GET":
                self.serve_static(path)
            else:
                self.send_json(405, {"error": "That action is not available"})
        except (ValueError, LookupError) as exc:
            self.send_json(400 if isinstance(exc, ValueError) else 404, {"error": str(exc)})
        except sqlite3.IntegrityError as exc:
            self.send_json(400, {"error": integrity_message(exc)})
        except Exception as exc:
            print(f"ERROR {method} {self.path}: {exc}")
            self.send_json(500, {"error": "Something went wrong while saving."})

    def route_api(self, method, path):
        parts = [part for part in path.split("/") if part]
        # parts[0] == "api"
        conn = connect()
        try:
            if method == "GET" and parts == ["api", "tree"]:
                self.send_json(200, tree(conn))
                return
            if method == "GET" and parts == ["api", "backup"]:
                body = json.dumps(backup(conn), ensure_ascii=False, indent=2).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Disposition", 'attachment; filename="networkplus-backup.json"')
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(body)
                return
            if method == "POST" and parts == ["api", "restore"]:
                restore(conn, self.read_json())
                self.send_json(200, {"ok": True})
                return
            if method == "POST" and parts == ["api", "chapters"]:
                new_id = save_chapter(conn, self.read_json())
                commit_changes(conn)
                self.send_json(201, {"id": new_id})
                return
            if len(parts) == 3 and parts[:2] == ["api", "chapters"] and parts[2].isdigit():
                chapter_id = int(parts[2])
                if method == "GET":
                    chapter = chapter_detail(conn, chapter_id)
                    if not chapter:
                        raise LookupError("Chapter not found")
                    self.send_json(200, chapter)
                    return
                if method == "PUT":
                    save_chapter(conn, self.read_json(), chapter_id)
                    commit_changes(conn)
                    self.send_json(200, {"id": chapter_id})
                    return
                if method == "DELETE":
                    if not one(conn, "SELECT id FROM chapters WHERE id = ?", (chapter_id,)):
                        raise LookupError("Chapter not found")
                    conn.execute("DELETE FROM chapters WHERE id = ?", (chapter_id,))
                    commit_changes(conn)
                    self.send_json(200, {"ok": True})
                    return
            if method == "POST" and parts == ["api", "sections"]:
                new_id = save_section(conn, self.read_json())
                commit_changes(conn)
                self.send_json(201, {"id": new_id})
                return
            if len(parts) == 3 and parts[:2] == ["api", "sections"] and parts[2].isdigit():
                section_id = int(parts[2])
                if method == "GET":
                    detail = section_detail(conn, section_id)
                    if not detail:
                        raise LookupError("Section not found")
                    self.send_json(200, detail)
                    return
                if method == "PUT":
                    save_section(conn, self.read_json(), section_id)
                    commit_changes(conn)
                    self.send_json(200, {"id": section_id})
                    return
                if method == "DELETE":
                    if not one(conn, "SELECT id FROM sections WHERE id = ?", (section_id,)):
                        raise LookupError("Section not found")
                    conn.execute("DELETE FROM sections WHERE id = ?", (section_id,))
                    commit_changes(conn)
                    self.send_json(200, {"ok": True})
                    return
            if method == "POST" and parts == ["api", "categories"]:
                new_id = save_category(conn, self.read_json())
                commit_changes(conn)
                self.send_json(201, {"id": new_id})
                return
            if len(parts) == 3 and parts[:2] == ["api", "categories"] and parts[2].isdigit():
                category_id = int(parts[2])
                if method == "PUT":
                    save_category(conn, self.read_json(), category_id)
                    commit_changes(conn)
                    self.send_json(200, {"id": category_id})
                    return
                if method == "DELETE":
                    row = one(conn, "SELECT id, parent_id FROM categories WHERE id = ?", (category_id,))
                    if not row:
                        raise LookupError("Category not found")
                    if row["parent_id"]:
                        conn.execute(
                            "UPDATE terms SET category_id = ? WHERE category_id = ?",
                            (row["parent_id"], category_id),
                        )
                    else:
                        child_ids = [
                            child["id"]
                            for child in conn.execute(
                                "SELECT id FROM categories WHERE parent_id = ?",
                                (category_id,),
                            )
                        ]
                        clear_ids = [category_id, *child_ids]
                        conn.execute(
                            f"UPDATE terms SET category_id = NULL WHERE category_id IN ({','.join('?' for _ in clear_ids)})",
                            clear_ids,
                        )
                        conn.execute("DELETE FROM categories WHERE parent_id = ?", (category_id,))
                    conn.execute("DELETE FROM categories WHERE id = ?", (category_id,))
                    commit_changes(conn)
                    self.send_json(200, {"ok": True})
                    return
            if method == "POST" and parts == ["api", "terms"]:
                new_id = save_term(conn, self.read_json())
                commit_changes(conn)
                self.send_json(201, {"id": new_id})
                return
            if len(parts) == 3 and parts[:2] == ["api", "terms"] and parts[2].isdigit():
                term_id = int(parts[2])
                if method == "PUT":
                    save_term(conn, self.read_json(), term_id)
                    commit_changes(conn)
                    self.send_json(200, {"id": term_id})
                    return
                if method == "DELETE":
                    if not one(conn, "SELECT id FROM terms WHERE id = ?", (term_id,)):
                        raise LookupError("Term not found")
                    conn.execute("DELETE FROM terms WHERE id = ?", (term_id,))
                    commit_changes(conn)
                    self.send_json(200, {"ok": True})
                    return
            if method == "POST" and parts == ["api", "reorder"]:
                payload = self.read_json()
                reorder(conn, payload.get("kind"), payload.get("ids"))
                commit_changes(conn)
                self.send_json(200, {"ok": True})
                return
            self.send_json(404, {"error": "Not found"})
        finally:
            conn.close()

    def read_json(self):
        length = int(self.headers.get("Content-Length") or 0)
        if length > 2_000_000:
            raise ValueError("That upload is too large")
        raw = self.rfile.read(length) if length else b"{}"
        try:
            data = json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError:
            raise ValueError("That data could not be read")
        if not isinstance(data, dict):
            raise ValueError("That data could not be read")
        return data

    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def serve_static(self, path):
        if path in ("", "/"):
            path = "/index.html"
        relative = path.lstrip("/")
        file_path = (STATIC / relative).resolve()
        try:
            file_path.relative_to(STATIC.resolve())
        except ValueError:
            self.send_error(404)
            return
        if not file_path.is_file():
            self.send_error(404)
            return
        types = {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "text/javascript; charset=utf-8",
            ".json": "application/json; charset=utf-8",
            ".svg": "image/svg+xml",
            ".png": "image/png",
        }
        body = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", types.get(file_path.suffix.lower(), "application/octet-stream"))
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(body)


def port_open(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(0.4)
        return sock.connect_ex((HOST, port)) == 0


def main():
    init_db()
    url = f"http://{HOST}:{PORT}"
    if port_open(PORT):
        print(f"Network+ is already running at {url}")
        if os.environ.get("NETWORKPLUS_NO_BROWSER") != "1":
            webbrowser.open(url)
        return
    print(f"Network+ study app: {url}")
    print(f"Database: {DB_PATH}")
    print("Leave this window open while you study. Close it to stop the app.")
    if os.environ.get("NETWORKPLUS_NO_BROWSER") != "1":
        threading.Timer(0.7, lambda: webbrowser.open(url)).start()
    StudyServer((HOST, PORT), Handler).serve_forever()


if __name__ == "__main__":
    main()
