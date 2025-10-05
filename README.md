# 🍽️ System Ocen Restauracji

Aplikacja webowa do obsługi QR kodów w restauracji, która kieruje klientów różnie w zależności od otrzymanej oceny.

## 🎯 Funkcjonalności

- **Ocena 1-10**: Interaktywny system oceniania
- **Smart Routing**: 
  - Ocena ≥8 → Przekierowanie do Google/TripAdvisor
  - Ocena <8 → Formularz kontaktu z managerem
- **Rekompensata**: Automatyczny voucher dla niezadowolonych klientów
- **Mobile-first**: Responsywny design dla telefonów
- **Bez backendu**: Działa na GitHub Pages

## 🚀 Demo

[Zobacz demo](https://twoja-nazwa.github.io/restaurant-rating/)

## 📱 Jak używać

1. Klient skanuje QR kod na stoliku
2. Otwiera się strona z oceną 1-10
3. Po wybraniu oceny:
   - **Wysoka ocena (8-10)**: Opcje recenzji na Google/TripAdvisor
   - **Niska ocena (1-7)**: Formularz kontaktu + voucher rabatowy

## ⚙️ Konfiguracja

### Linki do recenzji

Edytuj plik `script.js` i zmień linki w konfiguracji:

```javascript
const config = {
    googleReviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review',
    tripadvisorUrl: 'https://www.tripadvisor.pl/Restaurant_Review-YOUR_RESTAURANT_ID.html',
    minGoodRating: 8
};
```

### Dane kontaktowe

Edytuj plik `contact.html` i zmień dane kontaktowe:

```html
<p>📞 <strong>Manager:</strong> +48 123 456 789</p>
<p>📧 <strong>Email:</strong> manager@restauracja.pl</p>
```

### Integracja z emailem (opcjonalne)

Możesz zintegrować z EmailJS do automatycznego wysyłania emaili:

1. Zarejestruj się na [EmailJS](https://www.emailjs.com/)
2. Odkomentuj kod w `contact.js`
3. Dodaj swoje klucze API

## 📂 Struktura plików

```
├── index.html          # Strona główna z oceną
├── contact.html        # Formularz kontaktu dla niskich ocen  
├── styles.css          # Style CSS
├── script.js           # Logika głównej strony
├── contact.js          # Logika strony kontaktu
└── README.md           # Ta dokumentacja
```

## 🛠️ Instalacja na GitHub Pages

1. Fork tego repozytorium
2. Edytuj konfigurację (linki, dane kontaktowe)
3. Włącz GitHub Pages w Settings → Pages
4. Wybierz source: Deploy from branch → main
5. Twoja strona będzie dostępna na: `https://nazwa-użytkownika.github.io/nazwa-repo/`

## 📊 Śledzenie danych

Aplikacja zapisuje dane w localStorage przeglądarki:
- Oceny klientów
- Dane kontaktowe z formularza
- Statystyki użycia

Aby zobaczyć dane, otwórz konsole developerską i wpisz:
```javascript
getCustomerContacts() // Lista kontaktów
```

## 🎨 Personalizacja

### Kolory
Edytuj `styles.css` aby zmienić kolory:
- `#667eea` - główny kolor aplikacji
- `#e74c3c` - kolor niskich ocen
- `#27ae60` - kolor wysokich ocen

### Teksty
Wszystkie teksty można łatwo zmienić w plikach HTML.

## 📝 Licencja

MIT - możesz swobodnie używać w projektach komercyjnych.

## 🆘 Wsparcie

Jeśli masz pytania, utwórz issue w tym repozytorium.

---

Made with ❤️ for restaurants