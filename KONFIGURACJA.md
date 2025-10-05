# 🔧 PRZYKŁADY KONFIGURACJI

## 🌐 Jak uzyskać linki do recenzji

### Google Maps / Google Business
1. **Znajdź swoją firmę** na Google Maps
2. **Kliknij "Udostępnij"** 
3. **Skopiuj link** - będzie wyglądał jak:
   ```
   https://goo.gl/maps/AbC123...
   ```
4. **Dla bezpośrednich recenzji** znajdź swój Place ID:
   - Idź na: developers.google.com/maps/documentation/places/web-service/place-id
   - Lub użyj: `https://g.page/r/YOUR_PLACE_ID/review`

### TripAdvisor
1. **Znajdź swoją restaurację** na TripAdvisor
2. **Skopiuj URL** ze strony restauracji
3. **Link będzie wyglądał jak:**
   ```
   https://www.tripadvisor.pl/Restaurant_Review-g123456-d789012-Reviews-Nazwa_Restauracji-Miasto.html
   ```

## 📝 Przykład konfiguracji w script.js

```javascript
const config = {
    // Google - zastąp YOUR_PLACE_ID swoim Place ID
    googleReviewUrl: 'https://g.page/r/CxxxxxxxxxxxxxxxEM/review',
    
    // TripAdvisor - zastąp całym linkiem do swojej restauracji
    tripadvisorUrl: 'https://www.tripadvisor.pl/Restaurant_Review-g274856-d12345678-Reviews-Moja_Restauracja-Warszawa.html',
    
    // Minimalna ocena dla "dobrych" recenzji (8-10 = dobre, 1-7 = złe)
    minGoodRating: 8
};
```

## 📞 Przykład danych kontaktowych w contact.html

Znajdź w pliku `contact.html` sekcję:
```html
<div class="contact-details">
    <p>📞 <strong>Manager:</strong> +48 123 456 789</p>
    <p>📧 <strong>Email:</strong> manager@restauracja.pl</p>
    <p>💬 <strong>WhatsApp:</strong> +48 123 456 789</p>
</div>
```

I zastąp:
- `+48 123 456 789` → twój numer telefonu
- `manager@restauracja.pl` → twój email

## 🎨 Personalizacja

### Zmiana nazwy restauracji
W `index.html` znajdź:
```html
<h1>🍽️ Jak oceniasz naszą usługę?</h1>
<p>Twoja opinia jest dla nas bardzo ważna!</p>
```

Możesz zmienić na:
```html
<h1>🍽️ Jak oceniasz Restaurację XYZ?</h1>
<p>Dziękujemy za wizytę w naszej restauracji!</p>
```

### Zmiana kodu rabatowego
W `contact.js` znajdź:
```html
<p><strong>Kod: SORRY2024</strong> - 20% zniżki na całe zamówienie</p>
```

Możesz zmienić na swój kod promocyjny.

## 📧 Integracja z EmailJS (opcjonalne)

Jeśli chcesz otrzymywać emaile z formularzami kontaktowymi:

1. **Zarejestruj się na EmailJS.com**
2. **Utwórz template email**
3. **W contact.js odkomentuj kod EmailJS**
4. **Dodaj swoje klucze API**

## 🔍 Testowanie przed publikacją

Przed publikacją przetestuj aplikację lokalnie:
1. Otwórz `index.html` w przeglądarce
2. Sprawdź czy wszystkie przyciski działają
3. Przetestuj oba scenariusze (wysoka/niska ocena)
4. Sprawdź formularz kontaktowy

## 📱 QR Code Generator

Polecane generatory QR kodów:
- **qr-code-generator.com** (darmowy)
- **qrcode-monkey.com** (z logo)
- **canva.com** (designerskie QR kody)

### Ustawienia QR kodu:
- **Typ:** URL
- **Link:** https://twoja-nazwa.github.io/restaurant-rating-system/
- **Rozmiar:** Minimum 3x3 cm dla dobrej czytelności
- **Format:** PNG lub SVG (wektorowy)