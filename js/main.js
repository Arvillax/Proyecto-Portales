document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navContainer = document.querySelector('.nav-links-container');

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            navContainer.classList.add('active');
        });
    }

    if (menuClose && navContainer) {
        menuClose.addEventListener('click', () => {
            navContainer.classList.remove('active');
        });
    }

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
        });
    });
});