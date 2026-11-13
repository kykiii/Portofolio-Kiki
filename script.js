
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Toggle menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";

    menuBtn.setAttribute("aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );

});

// Close menu after clicking navigation
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-label", "Buka menu");

    });

});
