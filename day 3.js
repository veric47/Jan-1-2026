const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
 
function toggleMenu() {
    navLinks.classList.toggle("active");
}
 
menuBtn.addEventListener("click", toggleMenu);

const alertBtn = document.getElementById("alert-btn");

function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

alertBtn.addEventListener("click", showMessage);

const modal = document.getElementById("modal");

const closeModal = document.getElementById("close-modal");
 
window.addEventListener("load", function() {
    modal.classList.add("show");
});
 
closeModal.addEventListener("click", function() {
    modal.classList.remove("show");
});
