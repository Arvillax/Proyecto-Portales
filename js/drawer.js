document.addEventListener('DOMContentLoaded', () => {
    // Lógica del Drawer Menu (Abrir/Cerrar)
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const navLinksContainer = document.getElementById('navLinksContainer');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.add('active');
        });
    }

    if (menuClose && navLinksContainer) {
        menuClose.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    }

    // Lógica de Submenús en Móvil (Acordeón)
    const dropdowns = document.querySelectorAll('.menu-item-has-children');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            // Solo activar el comportamiento de acordeón en pantallas móviles
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('open');
            }
        });
    });

    // Cerrar el drawer al hacer clic fuera de él (opcional pero recomendado)
    document.addEventListener('click', (e) => {
        if (navLinksContainer && navLinksContainer.classList.contains('active')) {
            if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinksContainer.classList.remove('active');
            }
        }
    });
});