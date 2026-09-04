@echo off
echo ===================================================
echo Uploading Portfolio Project to GitHub (jamsed21)
echo ===================================================

cd /d "C:\Users\fawzi\.gemini\antigravity\scratch\jamsed-hossen-portfolio"

echo 1. Initializing Git Repository...
git init
git add .
git commit -m "Initial commit: Complete Portfolio with Admin Panel & Netlify/Vercel support"

echo 2. Renaming branch to main...
git branch -M main

echo 3. Linking to GitHub repository https://github.com/jamsed21/jamsed-hossen-portfolio.git ...
git remote remove origin 2>nul
git remote add origin https://github.com/jamsed21/jamsed-hossen-portfolio.git

echo 4. Pushing code to GitHub...
git push -u origin main

echo ===================================================
echo Upload Completed!
echo Visit: https://github.com/jamsed21/jamsed-hossen-portfolio
echo ===================================================
pause
