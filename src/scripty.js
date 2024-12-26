function accordionInteraction() {
    // Accordion functionality
    document.querySelectorAll(".accordion").forEach((accordion) => {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
        });
    });
}

// Call the functions when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    accordionInteraction();
    buttonToggle();
});

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
