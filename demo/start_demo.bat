@echo off
cd /d "%~dp0"
start "SmartApplyBot Demo Server" cmd /k python server.py
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:8787/
