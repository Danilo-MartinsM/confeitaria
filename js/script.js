// ==============================
// Hamburger Menu - Mobile
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        // Alterna a classe 'active' no nav para abrir/fechar
        nav.classList.toggle("active");
    });

    // Fecha o menu se clicar em um link
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("active")) {
                nav.classList.remove("active");
            }
        });
    });
});
