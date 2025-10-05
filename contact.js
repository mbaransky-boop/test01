document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    // Obsługa wysyłania formularza
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pobierz dane z formularza
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            problem: document.getElementById('problem').value,
            timestamp: new Date().toISOString(),
            rating: localStorage.getItem('lastRating') || 'nieznana'
        };
        
        // Zapisz w localStorage (w prawdziwej aplikacji wysłałbyś to na serwer)
        saveContactData(formData);
        
        // Pokaż komunikat o wysłaniu
        showThankYouMessage();
    });
    
    function saveContactData(data) {
        // Pobierz istniejące kontakty
        let contacts = JSON.parse(localStorage.getItem('customerContacts') || '[]');
        
        // Dodaj nowy kontakt
        contacts.push(data);
        
        // Zapisz z powrotem
        localStorage.setItem('customerContacts', JSON.stringify(contacts));
        
        // W prawdziwej aplikacji tutaj wysłałbyś dane na serwer
        console.log('Zapisano dane kontaktowe:', data);
        
        // Symulacja wysyłania emaila (w prawdziwej aplikacji)
        sendEmailNotification(data);
    }
    
    function sendEmailNotification(data) {
        // To jest tylko symulacja - w prawdziwej aplikacji użyj EmailJS lub innej usługi
        console.log('📧 Email wysłany do managera z danymi:', data);
        
        // Możesz zintegrować z EmailJS:
        // emailjs.send('service_id', 'template_id', data)
    }
    
    function showThankYouMessage() {
        // Zastąp formularz komunikatem
        const contactSection = document.querySelector('.contact-section');
        contactSection.innerHTML = `
            <div class="success-message">
                <h2>✅ Dziękujemy za kontakt!</h2>
                <p>Twoja wiadomość została wysłana do naszego managera.</p>
                <p><strong>Skontaktujemy się z Tobą w ciągu 2 godzin!</strong></p>
                
                <div style="margin: 30px 0; padding: 20px; background: #e8f5e8; border-radius: 10px;">
                    <h3>🎁 Twoja rekompensata czeka!</h3>
                    <p>Przygotowaliśmy dla Ciebie specjalny voucher rabatowy na następną wizytę.</p>
                    <p><strong>Kod: SORRY2024</strong> - 20% zniżki na całe zamówienie</p>
                </div>
                
                <div style="margin: 20px 0;">
                    <p><strong>Bezpośredni kontakt:</strong></p>
                    <p>📞 Manager: +48 123 456 789</p>
                    <p>📧 Email: manager@restauracja.pl</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="index.html" class="external-link">← Powrót do strony głównej</a>
            </div>
        `;
        
        // Scroll do góry
        window.scrollTo(0, 0);
    }
    
    // Funkcja do pobierania kontaktów (dla managera)
    window.getCustomerContacts = function() {
        const contacts = JSON.parse(localStorage.getItem('customerContacts') || '[]');
        console.table(contacts);
        return contacts;
    };
    
    // Funkcja do czyszczenia danych (dla testów)
    window.clearContactData = function() {
        localStorage.removeItem('customerContacts');
        console.log('Dane kontaktowe zostały wyczyszczone');
    };
    
    // Info w konsoli
    console.log('📞 Strona kontaktu załadowana');
    console.log('Aby zobaczyć kontakty: getCustomerContacts()');
    console.log('Aby wyczyścić dane: clearContactData()');
});

// Opcjonalna integracja z EmailJS (odkomentuj i skonfiguruj)
/*
// Dodaj w <head> strony contact.html:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

function initEmailJS() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Zastąp swoim kluczem z EmailJS
}

function sendEmailNotification(data) {
    const templateParams = {
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone,
        problem_description: data.problem,
        rating: data.rating,
        timestamp: new Date(data.timestamp).toLocaleString('pl-PL')
    };
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Email wysłany pomyślnie:', response);
        })
        .catch(function(error) {
            console.error('Błąd wysyłania emaila:', error);
        });
}
*/