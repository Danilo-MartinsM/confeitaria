// ==============================
// Hamburger Menu - Mobile
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active"); // adiciona/remove classe 'active'
    });

    // Fecha o menu ao clicar em algum link
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});




