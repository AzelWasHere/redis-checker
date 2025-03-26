@echo off
title Redis Connection Checker

:: Node.js kontrolü
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js not found! Please install Node.js: https://nodejs.org
    echo.
    echo After installing Node.js, run the program again.
    pause
    exit /b 1
)

:: node_modules klasörü kontrolü
if not exist "node_modules" (
    echo Required packages are being installed...
    call npm install
    if %errorlevel% neq 0 (
        echo Package installation error! Please check your internet connection.
        pause
        exit /b 1
    )
)

:: Programı çalıştır
echo.
echo Redis Connection Checker starting...
echo.
node index.js
pause 