// Hide cookie consent
function skrytDiv() {
    document.querySelector(".cookie-consent").style.display = "none";
}

// Popup functionality
function popup() {
    document.getElementById("myPopup").classList.toggle("show");
}

// Alert for order confirmation
function myalert() {
    alert(
        "Ďakujeme za Vašu objednávku\n" +
        "Info o nasledovnom postupe nájdete vo svojej e-mailovej schránke"
    );
}
