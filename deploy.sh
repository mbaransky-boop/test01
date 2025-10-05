#!/bin/bash

# Skrypt do opublikowania aplikacji na GitHub Pages
# 
# PRZED URUCHOMIENIEM:
# 1. ✅ Xcode Command Line Tools już zainstalowane
# 2. Utwórz repozytorium na GitHub (nazwa: restaurant-rating-system)
# 3. Zmień GITHUB_USERNAME poniżej na swoją nazwę użytkownika GitHub
# 4. Uruchom: chmod +x deploy.sh && ./deploy.sh

# === KONFIGURACJA ===
GITHUB_USERNAME="michalbaranski"  # ZMIEŃ TO NA SWOJĄ NAZWĘ GITHUB!
REPO_NAME="restaurant-rating-system"

echo "🚀 Publikowanie aplikacji na GitHub Pages..."
echo "📁 Katalog: $(pwd)"

# Sprawdź czy git jest dostępny
if ! command -v git &> /dev/null; then
    echo "❌ Git nie jest zainstalowany. Uruchom: xcode-select --install"
    exit 1
fi

# Inicjalizuj git (jeśli nie było)
if [ ! -d ".git" ]; then
    echo "📦 Inicjalizacja repozytorium git..."
    git init
fi

# Sprawdź czy zmieniono nazwę użytkownika
if [ "$GITHUB_USERNAME" = "twoja-nazwa-uzytkownika" ]; then
    echo "❌ Zmień GITHUB_USERNAME w skrypcie na swoją nazwę GitHub!"
    exit 1
fi

# Konfiguracja git (jeśli pierwsza instalacja)
echo "⚙️ Konfiguracja git..."
git config --global user.name "$GITHUB_USERNAME" 2>/dev/null || true
git config --global user.email "$GITHUB_USERNAME@users.noreply.github.com" 2>/dev/null || true

# Dodaj wszystkie pliki
echo "📝 Dodawanie plików..."
git add .

# Sprawdź czy są zmiany do commitowania
if git diff --staged --quiet; then
    echo "ℹ️ Brak zmian do commitowania"
else
    # Commit
    echo "💾 Tworzenie commit..."
    git commit -m "🍽️ Restaurant Rating System - Initial version

Features:
- Interactive 1-10 rating system
- Smart routing based on rating (8+ → Google/TripAdvisor, <8 → contact form)
- Mobile-responsive design
- Contact form with compensation promise
- Ready for GitHub Pages deployment"
fi

# Dodaj remote (jeśli nie istnieje)
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Dodawanie remote repository..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
fi

# Push do GitHub
echo "⬆️ Wysyłanie do GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Aplikacja została wysłana na GitHub!"
echo ""
echo "🌐 NASTĘPNE KROKI:"
echo "1. Idź na: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Kliknij 'Settings' → 'Pages'"
echo "3. W 'Source' wybierz 'Deploy from a branch'"
echo "4. Wybierz branch 'main' i folder '/ (root)'"
echo "5. Kliknij 'Save'"
echo ""
echo "🎉 Za 2-5 minut aplikacja będzie dostępna na:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "📱 QR kod możesz wygenerować dla tego linku!"