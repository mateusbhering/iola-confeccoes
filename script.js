// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

// Abre/fecha o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});
