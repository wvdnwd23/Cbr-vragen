@echo off
echo Starting CBR Mobile Exam Training...
cd /d %~dp0
python -m http.server 8080
pause