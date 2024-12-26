document.addEventListener("DOMContentLoaded", function () {
    // Accordion functionality
    document.querySelectorAll(".accordion").forEach((accordion) => {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
        });
    });

    // Button toggle functionality
    document.querySelectorAll("[id^='btn']").forEach((button) => {
        button.addEventListener("click", function () {
            const isSelected = this.style.backgroundColor === "green";
            this.style.backgroundColor = isSelected ? "grey" : "green";
            this.textContent = isSelected ? "Vybrať" : "Vybraté";
        });
    });
});

// Hide cookie consent
function skrytDiv() {
    document.querySelector(".cookie-consent").style.display = "none";
}

// Popup functionality
function popup() {
    document.getElementById("myPopup").classList.toggle("show");
}

// Form validation and navigation
function validateAndOpen() {
    const menoPriezvisko = document.querySelector(".formular input[type='text']").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const poziadavka = document.querySelector(".formular textarea").value.trim();
    const consentCheckbox = document.getElementById("consentCheckbox");

    if (!menoPriezvisko) {
        alert("Prosím, zadajte meno a priezvisko");
        return;
    }
    if (!poziadavka) {
        alert("Prosím, zadajte text v dotaze");
        return;
    }
    if (isValidEmail(email) && consentCheckbox.checked) {
        window.location.href = "ThankYouPage.html";
    } else {
        alert(
            !isValidEmail(email)
                ? "Neplatná e-mailová adresa"
                : "Musíte súhlasiť so spracovaním osobných údajov"
        );
    }
}

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Alert for order confirmation
function myalert() {
    alert(
        "Ďakujeme za Vašu objednávku\n" +
        "Info o nasledovnom postupe nájdete vo svojej e-mailovej schránke"
    );
}
