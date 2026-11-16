@echo off
chcp 65001 >nul
title Optica Erredos - servidor local
cd /d "%~dp0"
echo.
echo Iniciando el servidor local de Optica Erredos...
echo (deja esta ventana abierta mientras ves la pagina)
echo.
if not exist node_modules ( echo Instalando paquetes por primera vez... & call npm install )
if exist ".astro" rmdir /s /q ".astro"
start "" cmd /c "timeout /t 8 >/dev/null & start http://localhost:4321"
call npm run dev
echo.
echo === El servidor se detuvo. Si arriba hay un error, sacale una captura y mandamela. ===
pause
