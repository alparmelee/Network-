@echo off
cd /d "%~dp0"
set PYTHONUNBUFFERED=1
python server.py
if errorlevel 1 (
  echo.
  echo The app did not start. Install Python from python.org if it is missing, then try again.
  pause
)
