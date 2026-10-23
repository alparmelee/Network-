const state = {
  source: "",
  editing: localStorage.getItem("nplus-editing") === "1",
  query: "",
  tree: null,
  sectionData: null,
  chapterData: null,
  error: "",
  modal: null,
  drafts: {},
  quizKey: "",
  quizTermsAll: [],
  quizMode: "term",
  quizRun: null,
};

const app = document.getElementById("app");
const lightbox = document.getElementById("lightbox");
const toastEl = document.getElementById("toast");
let loadToken = 0;
let toastTimer = 0;

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    if (url.protocol === "http:" || url.protocol === "https:") return url.href;
  } catch {
    return "";
  }
  return "";
}

function formatInline(text) {
  return esc(text).replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");
}

function richText(text) {
  return formatInline(text).replace(/\n/g, "<br>");
}

function paragraphs(text) {
  const blocks = String(text || "").split(/\n{2,}/).filter((part) => part.trim());
  if (!blocks.length) return "";
  return blocks.map((part) => `<p>${richText(part)}</p>`).join("");
}

function toggleBold(field) {
  const start = field.selectionStart ?? 0;
  const end = field.selectionEnd ?? 0;
  const value = field.value;
  const selected = value.slice(start, end);
  const before = value.slice(Math.max(0, start - 2), start);
  const after = value.slice(end, end + 2);
  let next = value;
  let cursorStart = start;
  let cursorEnd = end;
  if (before === "**" && after === "**") {
    next = value.slice(0, start - 2) + selected + value.slice(end + 2);
    cursorStart = start - 2;
    cursorEnd = end - 2;
  } else if (selected.length >= 4 && selected.startsWith("**") && selected.endsWith("**")) {
    const inner = selected.slice(2, -2);
    next = value.slice(0, start) + inner + value.slice(end);
    cursorStart = start;
    cursorEnd = start + inner.length;
  } else {
    next = `${value.slice(0, start)}**${selected}**${value.slice(end)}`;
    cursorStart = start + 2;
    cursorEnd = end + 2;
  }
  const scroll = field.scrollTop;
  field.value = next;
  field.focus();
  field.setSelectionRange(cursorStart, cursorEnd);
  field.scrollTop = scroll;
  field.dispatchEvent(new Event("input", { bubbles: true }));
}

function termCountLabel(count) {
  if (!count) return "No terms yet";
  if (count === 1) return "1 term";
  return `${count} terms`;
}

function categoryCountLabel(section) {
  const count = (section.categories || []).filter((category) => !category.parent_id).length;
  if (!count) return "";
  if (count === 1) return " · 1 category";
  return ` · ${count} categories`;
}

function parseHash() {
  const parts = (location.hash.replace(/^#/, "") || "/").split("/").filter(Boolean);
  if (parts[0] === "s" && parts[1] && /^\d+$/.test(parts[1])) {
    if (parts[2] === "quiz") return { name: "quiz", scope: "section", id: Number(parts[1]) };
    return { name: "section", id: Number(parts[1]) };
  }
  if (parts[0] === "c" && parts[1] && /^\d+$/.test(parts[1]) && parts[2] === "quiz") {
    return { name: "quiz", scope: "chapter", id: Number(parts[1]) };
  }
  return { name: "home" };
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    method: options.method || "GET",
    headers: options.body ? { "Content-Type": "application/json" } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "The request failed");
  return data;
}

function toast(message) {
  toastEl.textContent = message;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 2200);
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function moveItem(ids, index, direction) {
  const next = [...ids];
  const target = index + direction;
  if (target < 0 || target >= next.length) return null;
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

function catalog() {
  const book = window.NETWORK_PLUS;
  if (!book || !Array.isArray(book.chapters)) return null;
  return book;
}

function staticTree(book) {
  const chapters = book.chapters.map((chapter) => {
    const sections = (chapter.sections || []).map((section) => ({
      id: section.id,
      chapter_id: section.chapter_id,
      code: section.code,
      title: section.title,
      summary: section.summary || "",
      sort_order: section.sort_order,
      term_count: (section.terms || []).length,
      terms: (section.terms || []).map((term) => ({ id: term.id, name: term.name })),
      categories: (section.categories || []).map((category) => ({
        id: category.id,
        parent_id: category.parent_id,
        name: category.name,
      })),
    }));
    return {
      ...chapter,
      sections,
      term_count: sections.reduce((sum, section) => sum + section.term_count, 0),
    };
  });
  return { chapters, db_path: "" };
}

function sectionRecord(book, id) {
  for (const chapter of book.chapters) {
    const section = (chapter.sections || []).find((item) => item.id === id);
    if (section) return { chapter, section };
  }
  return null;
}

function termsWithCategories(section) {
  const categories = section.categories || [];
  const byId = new Map(categories.map((category) => [category.id, category]));
  return (section.terms || []).map((term) => {
    const category = term.category_id ? byId.get(term.category_id) : null;
    const parent = category && category.parent_id ? byId.get(category.parent_id) : null;
    return {
      ...term,
      category_name: category ? category.name : null,
      parent_category_name: parent ? parent.name : null,
    };
  });
}

function staticSection(book, id) {
  const found = sectionRecord(book, id);
  if (!found) throw new Error("Section not found");
  const { chapter, section } = found;
  return {
    section: {
      id: section.id,
      chapter_id: section.chapter_id,
      code: section.code,
      title: section.title,
      summary: section.summary || "",
      sort_order: section.sort_order,
    },
    chapter,
    categories: section.categories || [],
    terms: termsWithCategories(section),
    siblings: (chapter.sections || []).map((item) => ({ id: item.id, code: item.code, title: item.title })),
  };
}

function staticChapter(book, id) {
  const chapter = book.chapters.find((item) => item.id === id);
  if (!chapter) throw new Error("Chapter not found");
  const terms = [];
  for (const section of chapter.sections || []) {
    for (const term of termsWithCategories(section)) {
      terms.push({ ...term, section_code: section.code, section_title: section.title });
    }
  }
  return { ...chapter, terms };
}

async function loadFromApi(route) {
  if (route.name === "home") {
    state.tree = await api("/api/tree");
  } else if (route.name === "section" || (route.name === "quiz" && route.scope === "section")) {
    state.sectionData = await api(`/api/sections/${route.id}`);
  } else if (route.name === "quiz" && route.scope === "chapter") {
    state.chapterData = await api(`/api/chapters/${route.id}`);
  }
}

function loadFromPage(route) {
  const book = catalog();
  if (!book) throw new Error("This page is missing its notes.");
  if (route.name === "home") state.tree = staticTree(book);
  else if (route.name === "section" || (route.name === "quiz" && route.scope === "section")) {
    state.sectionData = staticSection(book, route.id);
  } else if (route.name === "quiz" && route.scope === "chapter") {
    state.chapterData = staticChapter(book, route.id);
  }
}

async function loadRoute(options = {}) {
  const token = ++loadToken;
  const route = parseHash();
  state.error = "";
  try {
    if (state.source !== "page") {
      try {
        await loadFromApi(route);
        state.source = "api";
      } catch (error) {
        if (state.source === "api" || !catalog()) throw error;
        state.source = "page";
        state.editing = false;
        loadFromPage(route);
      }
    } else {
      loadFromPage(route);
    }
    if (token !== loadToken) return;
    if (route.name === "quiz") {
      const key = `${route.scope}:${route.id}`;
      const terms = route.scope === "section"
        ? state.sectionData.terms.map((term) => ({
            ...term,
            section_code: state.sectionData.section.code,
            section_title: state.sectionData.section.title,
          }))
        : state.chapterData.terms;
      if (state.quizKey !== key) {
        state.quizKey = key;
        state.quizRun = null;
        state.quizTermsAll = terms;
      } else if (!state.quizRun) {
        state.quizTermsAll = terms;
      }
    }
    render({ scroll: options.scroll || "top" });
  } catch (error) {
    if (token !== loadToken) return;
    state.error = error.message === "Failed to fetch"
      ? "The study app is not connected. Double-click start.bat and open http://127.0.0.1:8765"
      : error.message;
    render({ scroll: "top" });
  }
}

function shell(content) {
  document.body.classList.toggle("editing", state.editing);
  const route = parseHash();
  if (route.name === "home") document.title = "Network+ Study";
  return `
    <header class="topbar">
      <a class="logo" href="#/">Network<span>+</span></a>
      <div class="top-actions">
        <a class="top-link" href="#/">Guides</a>
        ${state.source === "page" ? "" : `<button class="edit-toggle${state.editing ? " on" : ""}" type="button" data-action="toggle-edit">
          ${state.editing ? "Editing on" : "Start editing"}
        </button>`}
      </div>
    </header>
    ${state.error ? `<div class="wrap"><p class="banner">${esc(state.error)}</p></div>` : ""}
    ${content}
    ${renderModal()}
  `;
}

function render(options = {}) {
  const search = document.getElementById("search");
  const cursor = search && options.focusSearch ? search.selectionStart : null;
  const y = options.scroll === "keep" ? window.scrollY : 0;
  const route = parseHash();
  let content = "";
  if (route.name === "home") content = renderHome();
  else if (route.name === "section") content = renderSection();
  else content = renderQuiz(route);
  app.innerHTML = shell(content);
  window.scrollTo(0, y);
  if (cursor !== null) {
    const next = document.getElementById("search");
    if (next) {
      next.focus();
      next.setSelectionRange(cursor, cursor);
    }
  }
  const firstField = state.modal ? document.querySelector(".modal input, .modal textarea") : null;
  if (firstField && state.modal.focus) {
    firstField.focus();
    state.modal.focus = false;
  }
}

function renderHome() {
  if (!state.tree) {
    return `<div class="wrap"><p class="lede">Loading your guides...</p></div>`;
  }
  const query = state.query.trim().toLowerCase();
  const words = query ? query.split(/\s+/) : [];
  const chapters = state.tree.chapters.map((chapter) => {
    const sections = chapter.sections.filter((section) => {
      if (!words.length) return true;
      const haystack = [
        section.code,
        section.title,
        section.summary,
        ...(section.categories || []).map((category) => category.name),
        ...section.terms.map((term) => term.name),
      ].join(" ").toLowerCase();
      return words.every((word) => haystack.includes(word));
    }).map((section) => {
      const matches = words.length
        ? section.terms.filter((term) => words.every((word) => term.name.toLowerCase().includes(word))).map((term) => term.name)
        : [];
      return { ...section, matches };
    });
    return { ...chapter, sections };
  }).filter((chapter) => chapter.sections.length || !words.length);

  const list = chapters.length
    ? chapters.map(renderChapter).join("")
    : `<p class="empty">No sections match that search.</p>`;

  return `
    <div class="wrap">
      <header class="page-head">
        <p class="eyebrow">CompTIA N10-009</p>
        <h1>Network+</h1>
        <p class="lede">Chapters and section pages, the same way the A+ notes were set up. Each page holds terms, a picture for each term, and a practice quiz built from those terms.</p>
      </header>
      ${state.editing ? `<p class="edit-banner">Editing is on. Add a chapter, open a section page, and add terms with an image link.</p>` : ""}
      <div class="toolbar">
        <input id="search" type="search" placeholder="Search sections and terms" value="${esc(state.query)}">
        ${state.editing ? `<button class="btn" type="button" data-action="new-chapter">New chapter</button>` : ""}
      </div>
      ${list}
      <footer class="footer">
        ${state.source === "page"
          ? "<p>These notes are saved in this page.</p>"
          : `<p>Saved in <code>${esc(state.tree.db_path)}</code>.</p>`}
        ${state.editing ? `<p><a href="/api/backup">Download backup</a> · <button class="mini ghost" type="button" data-action="pick-restore">Restore backup</button></p>` : ""}
      </footer>
    </div>
  `;
}

function renderChapter(chapter) {
  const quizClass = chapter.term_count < 2 ? "guide-quiz is-wait" : "guide-quiz";
  const index = state.tree.chapters.findIndex((item) => item.id === chapter.id);
  return `
    <section class="chapter">
      <div class="section-head">
        <div>
          <h2>Chapter ${esc(chapter.number)} · ${esc(chapter.title)}</h2>
          <p>${esc(chapter.summary)} ${esc(termCountLabel(chapter.term_count))}.</p>
        </div>
        <div class="head-actions">
          ${chapter.exam_percent != null ? `<span class="percent">${esc(chapter.exam_percent)}%</span>` : ""}
          <a class="${quizClass}" href="#/c/${chapter.id}/quiz">Quiz</a>
          ${state.editing && !state.query.trim() ? `
            <button class="mini" type="button" data-action="move" data-kind="chapters" data-index="${index}" data-dir="-1" ${index === 0 ? "disabled" : ""}>Up</button>
            <button class="mini" type="button" data-action="move" data-kind="chapters" data-index="${index}" data-dir="1" ${index === state.tree.chapters.length - 1 ? "disabled" : ""}>Down</button>
          ` : ""}
          ${state.editing ? `
            <button class="mini" type="button" data-action="edit-chapter" data-id="${chapter.id}">Edit</button>
            <button class="mini danger" type="button" data-action="delete-chapter" data-id="${chapter.id}" data-name="${esc(chapter.title)}">Delete</button>
          ` : ""}
        </div>
      </div>
      ${chapter.sections.length ? `<ul class="guide-list">
        ${chapter.sections.map((section, sectionIndex) => renderSectionRow(chapter, section, sectionIndex)).join("")}
      </ul>` : `<p class="empty">No sections in this chapter yet.</p>`}
      ${state.editing ? `<div class="add-row"><button class="btn ghost" type="button" data-action="new-section" data-chapter="${chapter.id}">New section</button></div>` : ""}
    </section>
  `;
}

function renderSectionRow(chapter, section, index) {
  const match = section.matches && section.matches.length
    ? ` Matches: ${section.matches.join(", ")}`
    : "";
  return `
    <li class="guide-row">
      <a class="guide-link" href="#/s/${section.id}">
        <span class="guide-id">${esc(section.code)}</span>
        <span>
          <span class="guide-title">${esc(section.title)}</span>
          <span class="guide-meta">${esc(termCountLabel(section.term_count))}${esc(categoryCountLabel(section))}${esc(match)}</span>
        </span>
      </a>
      <a class="guide-quiz${section.term_count < 2 ? " is-wait" : ""}" href="#/s/${section.id}/quiz">Quiz</a>
      ${state.editing && !state.query.trim() ? `
        <button class="mini" type="button" data-action="move" data-kind="sections" data-parent="${chapter.id}" data-index="${index}" data-dir="-1" ${index === 0 ? "disabled" : ""}>Up</button>
        <button class="mini" type="button" data-action="move" data-kind="sections" data-parent="${chapter.id}" data-index="${index}" data-dir="1" ${index === chapter.sections.length - 1 ? "disabled" : ""}>Down</button>
      ` : ""}
      ${state.editing ? `
        <button class="mini" type="button" data-action="edit-section" data-id="${section.id}">Edit</button>
        <button class="mini danger" type="button" data-action="delete-section" data-id="${section.id}" data-name="${esc(section.title)}">Delete</button>
      ` : ""}
    </li>
  `;
}

function renderSection() {
  const data = state.sectionData;
  if (!data) return `<div class="wrap"><p class="lede">Loading this page...</p></div>`;
  const { section, chapter, terms, siblings } = data;
  document.title = `${section.code} ${section.title} — Network+`;
  const place = siblings.findIndex((item) => item.id === section.id);
  const previous = place > 0 ? siblings[place - 1] : null;
  const next = place >= 0 && place < siblings.length - 1 ? siblings[place + 1] : null;
  const categories = data.categories || [];
  const toc = categories.length
    ? categoryToc(categories)
    : terms.map((term) => `<a href="#term-${term.id}">${esc(term.name)}</a>`).join("");
  return `
    <header class="hero">
      <div class="wrap hero-inner">
        <a class="back" href="#/">Chapter ${esc(chapter.number)} · ${esc(chapter.title)}</a>
        <p class="brand">${esc(section.code)}</p>
        <h1>${esc(section.title)}</h1>
        <p>${esc(section.summary || "Terms and definitions for this section.")}</p>
        <div class="hero-cta">
          <a href="#/s/${section.id}/quiz">Practice quiz</a>
          <a class="ghost" href="#terms">Browse terms</a>
          ${state.editing ? `<button type="button" data-action="edit-section" data-id="${section.id}">Edit page</button><button type="button" data-action="new-category">Add category</button><button type="button" data-action="new-term">Add term</button>` : ""}
        </div>
      </div>
    </header>
    ${toc ? `<nav class="toc" aria-label="On this page"><div class="wrap">${toc}</div></nav>` : ""}
    <main class="wrap terms" id="terms">
      ${state.editing ? `<p class="form-help edit-note">Add categories, then add a subcategory under any category. Save each term after you edit it. Ctrl+B bolds selected words.</p>` : ""}
      ${renderSectionBody(data)}
    </main>
    <div class="wrap pager">
      ${previous ? `<a href="#/s/${previous.id}">← ${esc(previous.code)} ${esc(previous.title)}</a>` : ""}
      ${next ? `<a href="#/s/${next.id}">${esc(next.code)} ${esc(next.title)} →</a>` : ""}
    </div>
    <div class="wrap quiz-cta">
      <h2>Practice these terms</h2>
      <p>The quiz uses only the terms saved on this page. Add at least two so it can offer choices.</p>
      <a class="btn quiz" href="#/s/${section.id}/quiz">Start quiz</a>
    </div>
  `;
}

function categoryToc(categories) {
  const ids = new Set(categories.map((category) => Number(category.id)));
  const tops = categories.filter((category) => !category.parent_id || !ids.has(Number(category.parent_id)));
  const children = new Map();
  for (const category of categories) {
    if (!category.parent_id || !ids.has(Number(category.parent_id))) continue;
    const key = Number(category.parent_id);
    children.set(key, [...(children.get(key) || []), category]);
  }
  return tops.flatMap((category) => {
    const links = [`<a href="#category-${category.id}">${esc(category.name)}</a>`];
    for (const sub of children.get(Number(category.id)) || []) {
      links.push(`<a href="#category-${sub.id}">${esc(category.name)} · ${esc(sub.name)}</a>`);
    }
    return links;
  }).join("");
}

function groupTerms(data) {
  const categories = data.categories || [];
  const terms = data.terms || [];
  const buckets = new Map(categories.map((category) => [Number(category.id), []]));
  const loose = [];
  for (const term of terms) {
    const bucket = term.category_id ? buckets.get(Number(term.category_id)) : undefined;
    if (bucket) bucket.push(term);
    else loose.push(term);
  }
  const ids = new Set(categories.map((category) => Number(category.id)));
  const tops = categories.filter((category) => !category.parent_id);
  const children = new Map();
  for (const category of categories) {
    if (!category.parent_id || !ids.has(Number(category.parent_id))) continue;
    const key = Number(category.parent_id);
    children.set(key, [...(children.get(key) || []), category]);
  }
  const asGroup = (category, index, siblingCount, nested) => ({
    key: String(category.id),
    category,
    index,
    siblingCount,
    terms: buckets.get(Number(category.id)) || [],
    children: nested,
  });
  const groups = tops.map((category, index) => asGroup(
    category,
    index,
    tops.length,
    (children.get(Number(category.id)) || []).map((sub, subIndex, list) => asGroup(sub, subIndex, list.length, [])),
  ));
  const orphans = categories.filter((category) => category.parent_id && !ids.has(Number(category.parent_id)));
  const orphanGroups = new Map();
  for (const category of orphans) {
    const key = Number(category.parent_id);
    orphanGroups.set(key, [...(orphanGroups.get(key) || []), category]);
  }
  for (const list of orphanGroups.values()) {
    list.forEach((category, index) => groups.push(asGroup(category, index, list.length, [])));
  }
  if (!categories.length || loose.length) {
    groups.push({ key: "", category: null, terms: loose, children: [] });
  }
  return groups;
}

function renderSectionBody(data) {
  const categories = data.categories || [];
  const terms = data.terms || [];
  const creator = state.editing ? renderCategoryCreator() : "";
  const composer = state.editing ? renderTermEditor(null) : "";
  if (!terms.length && !categories.length) {
    const empty = state.editing
      ? "Add a category if you want groups, then type the first term below."
      : "This page has no terms yet. Turn on editing and add the first one.";
    return `${creator}<p class="empty">${empty}</p>${composer}`;
  }
  const groups = groupTerms(data).map((group) => renderGroup(group, categories.length > 0)).join("");
  return `${creator}${groups}${composer}`;
}

function renderCategoryCreator() {
  return `
    <form class="category-create" id="new-category" data-form="category" data-id="">
      <input type="hidden" name="section_id" value="${state.sectionData.section.id}">
      <input name="name" required maxlength="80" placeholder="Category name">
      <input name="summary" maxlength="400" placeholder="Short description (optional)">
      <button class="btn" type="submit">Add category</button>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function renderSubcategoryCreator(parentId) {
  return `
    <form class="category-create subcategory-create" data-form="category" data-id="">
      <input type="hidden" name="section_id" value="${state.sectionData.section.id}">
      <input type="hidden" name="parent_id" value="${parentId}">
      <input name="name" required maxlength="80" placeholder="Subcategory name">
      <input name="summary" maxlength="400" placeholder="Short description (optional)">
      <button class="btn" type="submit">Add subcategory</button>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function renderCategoryHead(category, index, total) {
  const sub = Boolean(category.parent_id);
  const heading = sub ? "h3" : "h2";
  if (!state.editing) {
    return `
      <div class="category-head" id="category-${category.id}">
        <${heading}>${esc(category.name)}</${heading}>
        ${category.summary ? `<p>${esc(category.summary)}</p>` : ""}
      </div>
    `;
  }
  return `
    <form class="category-edit${sub ? " is-sub" : ""}" data-form="category" data-id="${category.id}" id="category-${category.id}">
      <input name="name" required maxlength="80" aria-label="${sub ? "Subcategory" : "Category"} name" value="${esc(category.name)}">
      <input name="summary" maxlength="400" placeholder="Short description" aria-label="Description" value="${esc(category.summary || "")}">
      <button class="btn" type="submit">Save</button>
      <button class="mini" type="button" data-action="move" data-kind="categories" data-parent="${category.parent_id || ""}" data-index="${index}" data-dir="-1" ${index === 0 ? "disabled" : ""}>Up</button>
      <button class="mini" type="button" data-action="move" data-kind="categories" data-parent="${category.parent_id || ""}" data-index="${index}" data-dir="1" ${index === total - 1 ? "disabled" : ""}>Down</button>
      <button class="mini danger" type="button" data-action="delete-category" data-id="${category.id}" data-parent="${category.parent_id || ""}" data-name="${esc(category.name)}">Delete</button>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function renderGroup(group, hasCategories) {
  const termsHtml = group.terms.length
    ? group.terms.map((term, index) => renderTerm(term, index, group.terms.length, group.key)).join("")
    : "";
  if (!group.category) {
    if (!hasCategories) return termsHtml;
    if (!group.terms.length) return "";
    return `<section class="category" id="other-terms"><div class="category-head"><h2>Other terms</h2></div>${termsHtml}</section>`;
  }
  const children = (group.children || []).map((child) => renderGroup(child, true)).join("");
  const empty = !group.terms.length && !(group.children || []).length
    ? `<p class="empty">${group.category.parent_id ? "No terms in this subcategory yet." : "No terms in this category yet."}</p>`
    : "";
  const creator = state.editing && !group.category.parent_id ? renderSubcategoryCreator(group.category.id) : "";
  return `
    <section class="category${group.category.parent_id ? " is-sub" : ""}">
      ${renderCategoryHead(group.category, group.index, group.siblingCount)}
      ${creator}
      ${termsHtml}
      ${empty}
      ${children}
    </section>
  `;
}

function termDraft(term) {
  const key = term ? String(term.id) : "new";
  return state.drafts[key] || {
    name: term?.name || "",
    definition: term?.definition || "",
    image_url: term?.image_url || "",
    category_id: term?.category_id ? String(term.category_id) : "",
  };
}

function categorySelect(selected) {
  const categories = state.sectionData?.categories || [];
  if (!categories.length) return "";
  const ids = new Set(categories.map((category) => Number(category.id)));
  const tops = categories.filter((category) => !category.parent_id || !ids.has(Number(category.parent_id)));
  const children = new Map();
  for (const category of categories) {
    if (!category.parent_id || !ids.has(Number(category.parent_id))) continue;
    const key = Number(category.parent_id);
    children.set(key, [...(children.get(key) || []), category]);
  }
  const choices = [];
  const placed = new Set();
  for (const category of tops) {
    choices.push({ id: category.id, label: category.name });
    placed.add(Number(category.id));
    for (const sub of children.get(Number(category.id)) || []) {
      choices.push({ id: sub.id, label: `${category.name} / ${sub.name}` });
      placed.add(Number(sub.id));
    }
  }
  for (const category of categories) {
    if (!placed.has(Number(category.id))) choices.push({ id: category.id, label: category.name });
  }
  const options = [`<option value="">No category</option>`].concat(
    choices.map((choice) => (
      `<option value="${choice.id}" ${String(selected || "") === String(choice.id) ? "selected" : ""}>${esc(choice.label)}</option>`
    ))
  );
  return `<label class="category-pick">Category<select name="category_id">${options.join("")}</select></label>`;
}

function renderTerm(term, index, total, groupKey = "") {
  if (state.editing) return renderTermEditor(term, index, total, groupKey);
  const image = safeUrl(term.image_url);
  const visual = image
    ? `<button class="visual" type="button" data-action="zoom" data-src="${esc(image)}" data-caption="${esc(term.name)}"><img src="${esc(image)}" alt="${esc(term.name)}" referrerpolicy="no-referrer"></button>`
    : `<div class="visual empty">No image</div>`;
  return `
    <article class="term" id="term-${term.id}">
      ${visual}
      <div class="body">
        <h3>${esc(term.name)}</h3>
        <div class="definition">${paragraphs(term.definition)}</div>
      </div>
    </article>
  `;
}

function renderTermEditor(term, index, total, groupKey = "") {
  const values = termDraft(term);
  const image = safeUrl(values.image_url);
  const caption = values.name || "Term";
  const visual = image
    ? `<button class="visual" type="button" data-action="zoom" data-src="${esc(image)}" data-caption="${esc(caption)}"><img src="${esc(image)}" alt="${esc(caption)}" referrerpolicy="no-referrer"></button>`
    : `<div class="visual empty">No image</div>`;
  const sectionId = state.sectionData.section.id;
  return `
    <form class="term term-edit" data-form="term" data-id="${term ? term.id : ""}" id="${term ? `term-${term.id}` : "new-term"}">
      ${term ? "" : `<input type="hidden" name="section_id" value="${sectionId}">`}
      <div class="inline-image">
        ${visual}
        <input name="image_url" type="url" placeholder="Image URL" value="${esc(values.image_url)}">
      </div>
      <div class="body">
        ${term ? "" : `<p class="eyebrow">New term</p>`}
        <input name="name" required maxlength="160" placeholder="Term" value="${esc(values.name)}">
        ${categorySelect(values.category_id)}
        <textarea name="definition" required maxlength="8000" placeholder="Definition">${esc(values.definition)}</textarea>
        <p class="form-error" hidden></p>
        <div class="term-actions">
          <button class="btn" type="submit">${term ? "Save" : "Add term"}</button>
          ${term ? `
            <button class="mini" type="button" data-action="move" data-kind="terms" data-group="${esc(groupKey)}" data-index="${index}" data-dir="-1" ${index === 0 ? "disabled" : ""}>Up</button>
            <button class="mini" type="button" data-action="move" data-kind="terms" data-group="${esc(groupKey)}" data-index="${index}" data-dir="1" ${index === total - 1 ? "disabled" : ""}>Down</button>
            <button class="mini danger" type="button" data-action="delete-term" data-id="${term.id}" data-name="${esc(term.name)}">Delete</button>
          ` : ""}
        </div>
      </div>
    </form>
  `;
}

function quizSource(route) {
  if (route.scope === "section" && state.sectionData) {
    const { section, chapter } = state.sectionData;
    return {
      back: `#/s/${section.id}`,
      backLabel: `Back to ${section.code}`,
      title: `${section.code} quiz`,
      subtitle: `${section.title} · ${chapter.title}`,
      blurb: "Questions come from the terms on this page.",
    };
  }
  if (route.scope === "chapter" && state.chapterData) {
    const chapter = state.chapterData;
    return {
      back: "#/",
      backLabel: "Back to guides",
      title: `Chapter ${chapter.number} quiz`,
      subtitle: chapter.title,
      blurb: "Questions come from every term in this chapter.",
    };
  }
  return null;
}

function renderQuiz(route) {
  const source = quizSource(route);
  if (!source) return `<div class="wrap"><p class="lede">Loading the quiz...</p></div>`;
  document.title = `${source.title} — Network+`;
  const body = state.quizRun ? renderQuizRun(route) : renderQuizSetup(source);
  return `
    <div class="wrap quiz-wrap">
      <a class="back" href="${source.back}">${esc(source.backLabel)}</a>
      <h1>${esc(source.title)}</h1>
      <p class="subtitle">${esc(source.subtitle)}</p>
      ${body}
    </div>
  `;
}

function renderQuizSetup(source) {
  const count = state.quizTermsAll.length;
  const images = state.quizTermsAll.filter((term) => safeUrl(term.image_url)).length;
  return `
    <div class="card">
      <h2>Choose a quiz</h2>
      <p class="subtitle">${esc(source.blurb)} ${esc(termCountLabel(count))} ready. ${images} with a picture.</p>
      ${count < 2 ? `<p class="banner">Add at least two terms before this quiz can offer a wrong answer.</p>` : `
        <div class="mode-list">
          <label><input type="radio" name="quiz-mode" value="term" checked> Read the definition, pick the term</label>
          <label><input type="radio" name="quiz-mode" value="definition"> See the term, pick the definition</label>
          <label><input type="radio" name="quiz-mode" value="image"> See the picture, pick the term</label>
          <label><input type="radio" name="quiz-mode" value="mix"> Mix all three</label>
        </div>
        <button class="btn" type="button" data-action="start-quiz">Start</button>
      `}
    </div>
  `;
}

function renderQuizRun(route) {
  const run = state.quizRun;
  if (run.finished) return renderQuizScore();
  const question = run.questions[run.index];
  const total = run.questions.length;
  const step = run.revealed ? run.index + 1 : run.index;
  const percent = Math.round((step / total) * 100);
  const badgeParts = [];
  if (route.scope === "chapter") badgeParts.push(`${question.term.section_code} ${question.term.section_title}`);
  if (question.term.category_name) {
    badgeParts.push(question.term.parent_category_name
      ? `${question.term.parent_category_name} · ${question.term.category_name}`
      : question.term.category_name);
  }
  const badge = badgeParts.length ? `<span class="badge">${esc(badgeParts.join(" · "))}</span>` : "";
  let stem = "";
  if (question.kind === "term") stem = `<p class="stem">${richText(question.term.definition)}</p>`;
  if (question.kind === "definition") {
    const image = safeUrl(question.term.image_url);
    stem = `${image ? `<figure class="stem-figure"><img src="${esc(image)}" alt="" referrerpolicy="no-referrer"></figure>` : ""}<p class="stem">${esc(question.term.name)}</p>`;
  }
  if (question.kind === "image") {
    stem = `<figure class="stem-figure"><img src="${esc(safeUrl(question.term.image_url))}" alt="" referrerpolicy="no-referrer"></figure>`;
  }
  const choices = question.choices.map((choice, index) => {
    let mark = "";
    if (run.revealed && choice.id === question.term.id) mark = " correct";
    else if (run.revealed && choice.id === run.selected) mark = " wrong";
    return `
      <button class="choice${mark}" type="button" data-action="answer" data-id="${choice.id}" ${run.revealed ? "disabled" : ""}>
        <span class="key">${index + 1}</span>
        <span>${richText(choice.label)}</span>
      </button>
    `;
  }).join("");
  const image = safeUrl(question.term.image_url);
  const feedback = run.revealed ? `
    <div class="feedback">
      <strong>${esc(question.term.name)}</strong>
      <div class="definition">${paragraphs(question.term.definition)}</div>
      ${question.kind !== "image" && image ? `<figure class="stem-figure"><img src="${esc(image)}" alt="${esc(question.term.name)}" referrerpolicy="no-referrer"></figure>` : ""}
      <div class="btn-row">
        <button class="btn" type="button" data-action="next-question">${run.index + 1 === total ? "See score" : "Next"}</button>
      </div>
    </div>
  ` : "";
  return `
    <div class="card">
      <div class="progress-meta"><span>Question ${run.index + 1} of ${total}</span><span>${run.correct} correct</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
      ${badge}
      <p class="prompt">${esc(question.prompt)}</p>
      ${stem}
      <div class="choices">${choices}</div>
      ${feedback}
    </div>
  `;
}

function renderQuizScore() {
  const run = state.quizRun;
  const total = run.questions.length;
  const missed = run.missed.map((term) => `
    <li>
      <strong>${esc(term.name)}</strong>
      <div class="definition">${paragraphs(term.definition)}</div>
    </li>
  `).join("");
  return `
    <div class="card">
      <p class="score">${run.correct} of ${total}</p>
      <p class="subtitle">${run.correct === total ? "Every term matched." : "These terms are worth another pass."}</p>
      ${missed ? `<ul class="missed">${missed}</ul>` : ""}
      <div class="btn-row">
        <button class="btn" type="button" data-action="start-quiz" data-mode="${esc(run.mode)}">Try again</button>
        ${run.missed.length >= 2 ? `<button class="btn ghost" type="button" data-action="practice-missed">Practice missed</button>` : ""}
      </div>
    </div>
  `;
}

function buildQuestions(terms, mode) {
  const usable = terms.filter((term) => term.name && term.definition);
  const pool = mode === "image" ? usable.filter((term) => safeUrl(term.image_url)) : usable;
  return shuffle(pool).map((term) => {
    let kind = mode;
    if (mode === "mix") {
      const kinds = ["term", "definition"];
      if (safeUrl(term.image_url)) kinds.push("image");
      kind = kinds[Math.floor(Math.random() * kinds.length)];
    }
    const others = shuffle(pool.filter((item) => item.id !== term.id)).slice(0, 3);
    const choices = shuffle([term, ...others]).map((item) => ({
      id: item.id,
      label: kind === "definition" ? item.definition : item.name,
    }));
    const prompts = {
      term: "Which term matches this definition?",
      definition: "Which definition matches this term?",
      image: "Which term is this picture?",
    };
    return { kind, prompt: prompts[kind], term, choices };
  });
}

function renderModal() {
  const modal = state.modal;
  if (!modal) return "";
  const title = {
    chapter: modal.id ? "Edit chapter" : "New chapter",
    section: modal.id ? "Edit section" : "New section",
    term: modal.id ? "Edit term" : "New term",
  }[modal.type];
  return `
    <div class="modal-back">
      <form class="modal" data-form="${modal.type}" data-id="${modal.id || ""}" role="dialog" aria-modal="true">
        <h2>${title}</h2>
        <div class="fields">
          ${modalFields(modal)}
          <p class="form-error" hidden></p>
          <div class="btn-row">
            <button class="btn" type="submit">Save</button>
            <button class="btn ghost" type="button" data-action="close-modal">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  `;
}

function modalFields(modal) {
  const data = modal.data || {};
  if (modal.type === "chapter") {
    return `
      <label>Chapter number<input name="number" type="number" min="1" max="99" required value="${esc(data.number ?? "")}"></label>
      <label>Title<input name="title" required maxlength="160" value="${esc(data.title || "")}"></label>
      <label>Summary<textarea name="summary" maxlength="600">${esc(data.summary || "")}</textarea></label>
      <label>Exam percent<input name="exam_percent" type="number" min="0" max="100" value="${esc(data.exam_percent ?? "")}"></label>
    `;
  }
  if (modal.type === "section") {
    return `
      <input type="hidden" name="chapter_id" value="${esc(data.chapter_id || "")}">
      <label>Section number<input name="code" required maxlength="20" placeholder="1.1" value="${esc(data.code || "")}"></label>
      <label>Title<input name="title" required maxlength="180" value="${esc(data.title || "")}"></label>
      <label>Summary<textarea name="summary" maxlength="800">${esc(data.summary || "")}</textarea></label>
    `;
  }
  const preview = safeUrl(data.image_url);
  return `
    <input type="hidden" name="section_id" value="${esc(data.section_id || "")}">
    <label>Term<input name="name" required maxlength="160" value="${esc(data.name || "")}"></label>
    <label>Definition
      <textarea name="definition" required maxlength="8000">${esc(data.definition || "")}</textarea>
      <span class="form-help">Select words and press Ctrl+B to bold them. Press it again to remove the bold.</span>
    </label>
    <label>Image URL
      <input name="image_url" type="url" placeholder="https://..." value="${esc(data.image_url || "")}">
      <span class="form-help">Paste a direct image link. It shows beside the term and can show up in the quiz.</span>
    </label>
    <div class="preview" id="image-preview">${preview ? `<img src="${esc(preview)}" alt="" referrerpolicy="no-referrer">` : "Image preview"}</div>
  `;
}

function openModal(type, data = {}, id = null) {
  state.modal = { type, data, id, focus: true };
  render({ scroll: "keep" });
}

function showFormError(message, form) {
  const el = (form || document).querySelector(".form-error");
  if (!el) return;
  el.hidden = !message;
  el.textContent = message || "";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.innerHTML = "";
}

function openLightbox(src, caption) {
  const image = safeUrl(src);
  if (!image) return;
  lightbox.innerHTML = `
    <button type="button" data-close="lightbox" aria-label="Close">×</button>
    <img src="${esc(image)}" alt="${esc(caption || "")}" referrerpolicy="no-referrer">
    <p>${esc(caption || "")}</p>
  `;
  lightbox.hidden = false;
}

async function onClick(event) {
  if (event.target.closest("[data-close='lightbox']") || event.target === lightbox) {
    closeLightbox();
    return;
  }
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl || !app.contains(actionEl)) return;
  const action = actionEl.dataset.action;
  if (action === "close-modal" && event.target.closest(".modal") && actionEl.dataset.action === "close-modal" && event.target !== actionEl) {
    return;
  }
  if (action === "close-modal") {
    event.preventDefault();
    state.modal = null;
    render({ scroll: "keep" });
    return;
  }
  if (actionEl.closest(".modal") && action !== "close-modal") return;

  if (action === "toggle-edit") {
    state.editing = !state.editing;
    localStorage.setItem("nplus-editing", state.editing ? "1" : "0");
    render({ scroll: "keep" });
    return;
  }
  if (action === "zoom") {
    openLightbox(actionEl.dataset.src, actionEl.dataset.caption);
    return;
  }
  if (action === "new-chapter") {
    const next = (state.tree?.chapters || []).reduce((max, chapter) => Math.max(max, chapter.number), 0) + 1;
    openModal("chapter", { number: next });
    return;
  }
  if (action === "edit-chapter") {
    const chapter = state.tree.chapters.find((item) => item.id === Number(actionEl.dataset.id));
    openModal("chapter", chapter, chapter.id);
    return;
  }
  if (action === "new-section") {
    const chapter = state.tree.chapters.find((item) => item.id === Number(actionEl.dataset.chapter));
    const codes = chapter.sections.map((section) => section.code);
    const guess = `${chapter.number}.${chapter.sections.length + 1}`;
    openModal("section", { chapter_id: chapter.id, code: codes.includes(guess) ? "" : guess });
    return;
  }
  if (action === "edit-section") {
    const id = Number(actionEl.dataset.id);
    let section = null;
    let chapterId = null;
    if (state.sectionData && state.sectionData.section.id === id) {
      section = state.sectionData.section;
      chapterId = section.chapter_id;
    } else if (state.tree) {
      for (const chapter of state.tree.chapters) {
        section = chapter.sections.find((item) => item.id === id);
        if (section) {
          chapterId = chapter.id;
          break;
        }
      }
    }
    openModal("section", { ...section, chapter_id: chapterId }, id);
    return;
  }
  if (action === "new-term" || action === "new-category") {
    const card = document.getElementById(action === "new-term" ? "new-term" : "new-category");
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
    card?.querySelector("[name='name']")?.focus();
    return;
  }
  if (action === "delete-chapter" || action === "delete-section" || action === "delete-term" || action === "delete-category") {
    const name = actionEl.dataset.name || "this";
    const labels = {
      "delete-chapter": `Delete chapter "${name}" and every section and term inside it?`,
      "delete-section": `Delete section "${name}" and its terms?`,
      "delete-term": `Delete the term "${name}"?`,
      "delete-category": actionEl.dataset.parent
        ? `Delete the subcategory "${name}"? Its terms move up into the category above them.`
        : `Delete the category "${name}"? Subcategories under it are removed. Terms stay on this page.`,
    };
    if (!confirm(labels[action])) return;
    const paths = {
      "delete-chapter": `/api/chapters/${actionEl.dataset.id}`,
      "delete-section": `/api/sections/${actionEl.dataset.id}`,
      "delete-term": `/api/terms/${actionEl.dataset.id}`,
      "delete-category": `/api/categories/${actionEl.dataset.id}`,
    };
    try {
      await api(paths[action], { method: "DELETE" });
      if (action === "delete-term") delete state.drafts[actionEl.dataset.id];
      if (action === "delete-section" && parseHash().name === "section") location.hash = "#/";
      else await loadRoute({ scroll: "keep" });
      toast("Deleted");
    } catch (error) {
      toast(error.message);
    }
    return;
  }
  if (action === "move") {
    const kind = actionEl.dataset.kind;
    const index = Number(actionEl.dataset.index);
    const direction = Number(actionEl.dataset.dir);
    let ids = [];
    if (kind === "chapters") ids = state.tree.chapters.map((chapter) => chapter.id);
    if (kind === "sections") {
      const chapter = state.tree.chapters.find((item) => item.id === Number(actionEl.dataset.parent));
      ids = chapter.sections.map((section) => section.id);
    }
    if (kind === "categories") {
      const parent = actionEl.dataset.parent || "";
      ids = (state.sectionData.categories || [])
        .filter((category) => String(category.parent_id || "") === parent)
        .map((category) => category.id);
    }
    let next = null;
    if (kind === "terms") {
      const groups = groupTerms(state.sectionData);
      const target = actionEl.dataset.group || "";
      const ordered = [];
      let moved = false;
      for (const group of groups) {
        let groupIds = group.terms.map((term) => term.id);
        if (group.key === target) {
          const shifted = moveItem(groupIds, index, direction);
          if (!shifted) return;
          groupIds = shifted;
          moved = true;
        }
        ordered.push(...groupIds);
      }
      if (!moved) return;
      next = ordered;
    } else {
      next = moveItem(ids, index, direction);
    }
    if (!next) return;
    try {
      await api("/api/reorder", { method: "POST", body: { kind, ids: next } });
      await loadRoute({ scroll: "keep" });
    } catch (error) {
      toast(error.message);
    }
    return;
  }
  if (action === "pick-restore") {
    document.getElementById("restore-file").click();
    return;
  }
  if (action === "start-quiz") {
    const selected = actionEl.dataset.mode || document.querySelector("input[name='quiz-mode']:checked")?.value || "term";
    beginQuiz(selected, state.quizTermsAll);
    return;
  }
  if (action === "practice-missed") {
    beginQuiz(state.quizRun.mode, state.quizRun.missed);
    return;
  }
  if (action === "answer") {
    revealAnswer(Number(actionEl.dataset.id));
    return;
  }
  if (action === "next-question") {
    const run = state.quizRun;
    run.index += 1;
    run.revealed = false;
    run.selected = null;
    if (run.index >= run.questions.length) run.finished = true;
    render({ scroll: "top" });
  }
}

function beginQuiz(mode, terms) {
  const questions = buildQuestions(terms, mode);
  if (questions.length < 2) {
    toast(mode === "image" ? "Add image links on at least two terms for a picture quiz." : "Add at least two terms first.");
    return;
  }
  state.quizMode = mode;
  state.quizRun = {
    mode,
    questions,
    index: 0,
    revealed: false,
    selected: null,
    correct: 0,
    missed: [],
    finished: false,
  };
  render({ scroll: "top" });
}

function revealAnswer(choiceId) {
  const run = state.quizRun;
  if (!run || run.revealed || run.finished) return;
  const question = run.questions[run.index];
  run.revealed = true;
  run.selected = choiceId;
  if (choiceId === question.term.id) run.correct += 1;
  else run.missed.push(question.term);
  render({ scroll: "keep" });
}

async function onSubmit(event) {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const kind = form.dataset.form;
  const id = form.dataset.id;
  const payload = Object.fromEntries(new FormData(form).entries());
  const paths = { chapter: "/api/chapters", section: "/api/sections", term: "/api/terms", category: "/api/categories" };
  const path = id ? `${paths[kind]}/${id}` : paths[kind];
  const button = form.querySelector("[type='submit']");
  button.disabled = true;
  try {
    const saved = await api(path, { method: id ? "PUT" : "POST", body: payload });
    state.modal = null;
    if (kind === "term") delete state.drafts[id || "new"];
    if (kind === "section" && !id) {
      toast("Saved");
      location.hash = `#/s/${saved.id}`;
      return;
    }
    await loadRoute({ scroll: "keep" });
    toast("Saved");
    if (kind === "term" && !id) {
      document.getElementById(`term-${saved.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  } catch (error) {
    showFormError(error.message, form);
    button.disabled = false;
  }
}

function onInput(event) {
  const termForm = event.target.closest("form[data-form='term']");
  if (termForm && !termForm.closest(".modal")) {
    const key = termForm.dataset.id || "new";
    state.drafts[key] = {
      name: termForm.querySelector("[name='name']").value,
      definition: termForm.querySelector("[name='definition']").value,
      image_url: termForm.querySelector("[name='image_url']").value,
      category_id: termForm.querySelector("[name='category_id']")?.value || "",
    };
    if (event.target.name === "image_url") updateTermImage(termForm);
    return;
  }
  if (event.target.id === "search") {
    state.query = event.target.value;
    render({ scroll: "keep", focusSearch: true });
    return;
  }
  if (event.target.name === "image_url") {
    const preview = document.getElementById("image-preview");
    const image = safeUrl(event.target.value.trim());
    if (!preview) return;
    preview.innerHTML = image
      ? `<img src="${esc(image)}" alt="" referrerpolicy="no-referrer">`
      : "Image preview";
  }
}

function updateTermImage(form) {
  const slot = form.querySelector(".inline-image");
  const current = slot?.querySelector(".visual");
  if (!slot || !current) return;
  const image = safeUrl(form.querySelector("[name='image_url']").value.trim());
  const name = form.querySelector("[name='name']").value || "Term";
  const next = document.createElement(image ? "button" : "div");
  if (image) {
    next.type = "button";
    next.className = "visual";
    next.dataset.action = "zoom";
    next.dataset.src = image;
    next.dataset.caption = name;
    const img = document.createElement("img");
    img.src = image;
    img.alt = name;
    img.referrerPolicy = "no-referrer";
    next.appendChild(img);
  } else {
    next.className = "visual empty";
    next.textContent = "No image";
  }
  current.replaceWith(next);
}

function onKey(event) {
  if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === "b" && event.target?.name === "definition") {
    event.preventDefault();
    toggleBold(event.target);
    return;
  }
  if (event.key === "Escape") {
    if (!lightbox.hidden) {
      closeLightbox();
      return;
    }
    if (state.modal) {
      state.modal = null;
      render({ scroll: "keep" });
    }
    return;
  }
  const typing = ["INPUT", "TEXTAREA"].includes(event.target.tagName);
  if (typing) return;
  const run = state.quizRun;
  if (!run || run.finished || parseHash().name !== "quiz") return;
  if (!run.revealed && /^[1-4]$/.test(event.key)) {
    const choice = run.questions[run.index].choices[Number(event.key) - 1];
    if (choice) revealAnswer(choice.id);
  }
  if (run.revealed && event.key === "Enter") {
    document.querySelector("[data-action='next-question']")?.click();
  }
}

document.getElementById("restore-file").addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  event.target.value = "";
  if (!file) return;
  if (!confirm("Replace everything in the database with this backup?")) return;
  try {
    const payload = JSON.parse(await file.text());
    await api("/api/restore", { method: "POST", body: payload });
    await loadRoute({ scroll: "top" });
    toast("Backup restored");
  } catch (error) {
    toast(error instanceof SyntaxError ? "That file is not a Network+ backup." : error.message);
  }
});

app.addEventListener("click", onClick);
app.addEventListener("submit", onSubmit);
app.addEventListener("input", onInput);
app.addEventListener("error", (event) => {
  if (event.target.tagName === "IMG") event.target.closest(".visual, .preview, .stem-figure")?.classList.add("broken");
}, true);
lightbox.addEventListener("click", onClick);
document.addEventListener("keydown", onKey);
window.addEventListener("hashchange", () => {
  state.quizKey = "";
  state.quizRun = null;
  state.drafts = {};
  loadRoute({ scroll: "top" });
});
loadRoute({ scroll: "top" });
