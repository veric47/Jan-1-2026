const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const alertBtn = document.getElementById("alert-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

// Toggle menu
function toggleMenu() {
    navLinks.classList.toggle("active");
}
menuBtn.addEventListener("click", toggleMenu);

// Close menu when link is clicked (better UX)
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Button interaction (cleaner than alert)
function showMessage() {
    alertBtn.textContent = "Thanks for visiting!";
}
alertBtn.addEventListener("click", showMessage);

// Show modal on load
window.addEventListener("load", () => {
    modal.classList.add("show");
});

// Close modal (X button)
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});