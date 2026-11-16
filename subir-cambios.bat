@echo off
chcp 65001 >nul
title Optica Erredos - subir cambios al repo
cd /d "%~dp0"
echo.
echo Subiendo cambios al repositorio...
echo.
git add .
git commit -m "Quienes somos: textos, telefono, logo blanco en footer y mejoras"
git push
echo.
echo === Listo. Si arriba ves un error (rojo o "fatal"), sacale una captura y mandamela. ===
pause
