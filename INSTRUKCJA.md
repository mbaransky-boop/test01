# 📋 INSTRUKCJA KROK PO KROK - GitHub Pages

## 🛠️ PRZED ROZPOCZĘCIEM

### 1. Zainstaluj Git (jeśli nie masz)
```bash
xcode-select --install
```

### 2. Utwórz konto GitHub (jeśli nie masz)
- Idź na github.com i zarejestruj się

---

## 🚀 PUBLIKACJA APLIKACJI

### KROK 1: Utwórz repozytorium na GitHub

1. **Idź na github.com** i zaloguj się
2. **Kliknij zielony przycisk "New"** (lub + → New repository)
3. **Wypełnij dane:**
   - Repository name: `restaurant-rating-system`
   - Description: `System ocen dla restauracji z QR kodami`
   - ✅ Public
   - ❌ NIE dodawaj README.md
   - ❌ NIE dodawaj .gitignore
4. **Kliknij "Create repository"**

### KROK 2: Wysłanie kodu na GitHub

1. **Otwórz Terminal** i przejdź do folderu z aplikacją:
```bash
cd "/Users/michalbaranski/PANORAMA VS STUDIO CODE"
```

2. **Edytuj skrypt deploy.sh:**
   - Otwórz plik `deploy.sh`
   - Zmień `GITHUB_USERNAME="twoja-nazwa-uzytkownika"` na swoją nazwę GitHub
   - Zapisz plik

3. **Uruchom skrypt:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### KROK 3: Włącz GitHub Pages

1. **Idź na swoje repozytorium** GitHub
2. **Kliknij "Settings"** (w menu repozytorium)
3. **Scroll w dół do "Pages"** (lewa strona)
4. **W "Source" wybierz:**
   - Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. **Kliknij "Save"**

---

## 🎉 GOTOWE!

**Za 2-5 minut aplikacja będzie dostępna na:**
```
https://twoja-nazwa-uzytkownika.github.io/restaurant-rating-system/
```

**Ten link możesz:**
- 📱 Zamienić na QR kod
- 📧 Wysłać klientom
- 🖨️ Wydrukować na stolikach

---

## 📱 GENEROWANIE QR KODU

1. **Idź na:** qr-code-generator.com
2. **Wklej link:** https://twoja-nazwa-uzytkownika.github.io/restaurant-rating-system/
3. **Pobierz QR kod** jako PNG/SVG
4. **Wydrukuj i postaw na stolikach** w restauracji

---

## ⚙️ KONFIGURACJA APLIKACJI

### Zmiana linków do recenzji:
1. Edytuj `script.js`
2. Znajdź sekcję `config`
3. Zastąp YOUR_GOOGLE_PLACE_ID i YOUR_RESTAURANT_ID

### Zmiana danych kontaktowych:
1. Edytuj `contact.html`
2. Zmień numery telefonu i email managera

---

## 🆘 PROBLEMY?

**Git nie działa?**
```bash
xcode-select --install
```

**Skrypt nie działa?**
- Sprawdź czy zmieniłeś nazwę użytkownika w deploy.sh
- Sprawdź czy utworzyłeś repozytorium na GitHub

**Aplikacja nie ładuje się?**
- Sprawdź czy GitHub Pages jest włączone
- Poczekaj 5-10 minut na propagację

---

## 📞 WSPARCIE

Jeśli masz problemy, napisz issue na GitHub lub skontaktuj się ze mną!