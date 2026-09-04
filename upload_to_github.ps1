Write-Host "===================================================" -ForegroundColor Cyan
Write-Host " Uploading Portfolio Project to GitHub (jamsed21)" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan

Set-Location "C:\Users\fawzi\.gemini\antigravity\scratch\jamsed-hossen-portfolio"

git init
git add .
git commit -m "Initial commit: Complete Portfolio with Admin Panel & Netlify/Vercel support"
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/jamsed21/jamsed-hossen-portfolio.git
git push -u origin main

Write-Host "===================================================" -ForegroundColor Green
Write-Host " Upload Completed!" -ForegroundColor Green
Write-Host " Visit: https://github.com/jamsed21/jamsed-hossen-portfolio" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
