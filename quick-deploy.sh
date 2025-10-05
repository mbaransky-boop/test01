#!/bin/bash

# 🚀 SKRYPT PUBLIKACJI DLA MICHAŁA
# Uruchom po utworzeniu repo na GitHub: ./quick-deploy.sh

echo "🍽️ Publikuję Restaurant Rating System na GitHub..."

# Sprawdź czy jesteśmy w dobrym katalogu
if [ ! -f "index.html" ]; then
    echo "❌ Nie znaleziono index.html. Upewnij się, że jesteś w katalogu z aplikacją."
    exit 1
fi

# Twoja nazwa GitHub (ZMIEŃ jeśli nie jest michalbaranski)
GITHUB_USERNAME="michalbaranski"
REPO_NAME="restaurant-rating-system"

echo "📂 Katalog: $(pwd)"
echo "👤 GitHub: $GITHUB_USERNAME"
echo "📦 Repo: $REPO_NAME"
echo ""

# Konfiguracja git globalnie (tylko raz)
echo "⚙️ Konfiguracja git..."
git config --global user.name "$GITHUB_USERNAME" 2>/dev/null || true
git config --global user.email "$GITHUB_USERNAME@users.noreply.github.com" 2>/dev/null || true

# Inicjalizuj repozytorium
echo "📦 Inicjalizacja git..."
rm -rf .git 2>/dev/null || true  # Usuń stare repo jeśli było
git init

# Dodaj wszystkie pliki
echo "📝 Dodawanie plików..."
git add .

# Commit
echo "💾 Tworzenie commit..."
git commit -m "🍽️ Restaurant Rating System

✨ Features:
- Interactive 1-10 rating system  
- Smart routing: 8+ → Google/TripAdvisor, <8 → contact form
- Mobile-responsive design
- Contact form with compensation promise
- Ready for GitHub Pages

🚀 Ready to deploy!"

# Dodaj remote
echo "🔗 Łączenie z GitHub..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Push
echo "⬆️ Wysyłanie na GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ GOTOWE! Aplikacja została wysłana na GitHub!"
echo ""
echo "🌐 OSTATNI KROK - WŁĄCZ GITHUB PAGES:"
echo "1. Idź na: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Kliknij 'Settings'"
echo "3. Przewiń do 'Pages' (po lewej)"
echo "4. W 'Source' wybierz 'Deploy from a branch'"
echo "5. Wybierz 'main' i '/ (root)'"
echo "6. Kliknij 'Save'"
echo ""
echo "🎉 Za 2-5 minut aplikacja będzie dostępna na:"
echo "   👉 https://$GITHUB_USERNAME.github.io/$REPO_NAME/ 👈"
echo ""
echo "📱 Ten link możesz zamienic na QR kod i wydrukować!"

# Otwórz GitHub w przeglądarce
echo ""
echo "🌐 Otwieram GitHub w przeglądarce..."
open "https://github.com/$GITHUB_USERNAME/$REPO_NAME" 2>/dev/null || echo "Idź ręcznie na: https://github.com/$GITHUB_USERNAME/$REPO_NAME"