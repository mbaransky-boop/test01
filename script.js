document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.getElementById('submit-rating');
    const ratingText = document.getElementById('rating-text');
    let selectedRating = 0;

    // Konfiguracja - tutaj możesz zmienić linki do swoich profili
    const config = {
        googleReviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review',
        tripadvisorUrl: 'https://www.tripadvisor.pl/Restaurant_Review-YOUR_RESTAURANT_ID.html',
        minGoodRating: 8
    };

    // Obsługa kliknięć na przyciski ocen
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            
            // Usuń poprzednie zaznaczenia
            ratingButtons.forEach(btn => {
                btn.classList.remove('selected', 'low-rating', 'high-rating');
            });
            
            // Zaznacz wybraną ocenę i wszystkie poprzednie
            for (let i = 0; i < selectedRating; i++) {
                const btn = ratingButtons[i];
                btn.classList.add('selected');
                
                if (selectedRating < config.minGoodRating) {
                    btn.classList.add('low-rating');
                } else {
                    btn.classList.add('high-rating');
                }
            }
            
            // Aktualizuj tekst
            updateRatingText(selectedRating);
            
            // Aktywuj przycisk submit
            submitButton.disabled = false;
        });
    });

    // Obsługa wysyłania oceny
    submitButton.addEventListener('click', function() {
        if (selectedRating === 0) return;
        
        // Zapisz ocenę w localStorage (opcjonalnie)
        localStorage.setItem('lastRating', selectedRating);
        localStorage.setItem('ratingDate', new Date().toISOString());
        
        // Przekieruj na podstawie oceny
        if (selectedRating >= config.minGoodRating) {
            redirectToExternalReview();
        } else {
            redirectToContact();
        }
    });

    function updateRatingText(rating) {
        const messages = {
            1: 'Bardzo źle (1/10) 😞',
            2: 'Źle (2/10) 😔',
            3: 'Słabo (3/10) 😕',
            4: 'Poniżej oczekiwań (4/10) 😐',
            5: 'Średnio (5/10) 😐',
            6: 'Niezłe (6/10) 🙂',
            7: 'Dobrze (7/10) 😊',
            8: 'Bardzo dobrze (8/10) 😄',
            9: 'Doskonale (9/10) 🤩',
            10: 'Perfekcyjnie (10/10) 🌟'
        };
        
        ratingText.textContent = messages[rating] || 'Wybierz ocenę od 1 do 10';
    }

    function redirectToExternalReview() {
        // Pokaż opcje wyboru platformy
        showExternalOptions();
    }

    function redirectToContact() {
        // Płynne przekierowanie do strony kontaktu
        window.location.href = 'contact.html';
    }

    function showExternalOptions() {
        // Utwórz modal z opcjami zewnętrznych platform
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>🌟 Dziękujemy za wysoką ocenę!</h2>
                <p>Pomóż innym poznać naszą restaurację - zostaw opinię na:</p>
                <div class="external-links">
                    <a href="${config.googleReviewUrl}" target="_blank" class="external-link google-link">
                        📍 Google Maps
                    </a>
                    <a href="${config.tripadvisorUrl}" target="_blank" class="external-link tripadvisor-link">
                        ✈️ TripAdvisor
                    </a>
                </div>
                <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
                    Możesz też zamknąć to okno i wrócić do restauracji 😊
                </p>
                <button onclick="closeModal()" class="close-btn">Zamknij</button>
            </div>
        `;
        
        // Dodaj style dla modala
        const style = document.createElement('style');
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 500px;
                margin: 20px;
                animation: slideIn 0.3s ease;
            }
            
            .close-btn {
                background: #6c757d;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(modal);
        
        // Dodaj funkcję zamykania do globalnego scope
        window.closeModal = function() {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        };
    }

    // Funkcja do konfiguracji linków (do użycia w konsoli developerskiej)
    window.configureReviewLinks = function(googleUrl, tripadvisorUrl) {
        config.googleReviewUrl = googleUrl;
        config.tripadvisorUrl = tripadvisorUrl;
        console.log('Linki zostały zaktualizowane:', config);
    };

    // Info w konsoli dla deweloperów
    console.log('🍽️ System ocen restauracji załadowany!');
    console.log('Aby skonfigurować linki, użyj: configureReviewLinks("GOOGLE_URL", "TRIPADVISOR_URL")');
});