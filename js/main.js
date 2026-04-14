document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navContainer = document.querySelector('.nav-links-container');

    // Abrir menú hamburguesa
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            navContainer.classList.add('active');
        });
    }

    // Cerrar menú hamburguesa
    if (menuClose && navContainer) {
        menuClose.addEventListener('click', () => {
            navContainer.classList.remove('active');
        });
    }

    // ========== ACORDEÓN PARA SUBMENÚS EN MÓVIL ==========
    const menuItems = document.querySelectorAll('.menu-item-has-children');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');  // Busca el enlace dentro del item
        if (link) {
            link.addEventListener('click', (e) => {
                // Solo en móvil (ancho <= 768px)
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // Evita que navegue a "#"
                    
                    // Cierra otros submenús abiertos
                    menuItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('open')) {
                            otherItem.classList.remove('open');
                        }
                    });
                    
                    // Alterna la clase 'open' en el item actual
                    item.classList.toggle('open');
                }
            });
        }
    });

    // Cerrar menú al hacer clic en enlaces normales (que no tienen submenú)
    const simpleLinks = document.querySelectorAll('.nav-links > li:not(.menu-item-has-children) a');
    simpleLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navContainer.classList.remove('active');
            }
        });
    });

    // ========== FIX PARA MÓVIL ==========
    function fixMobileLayout() {
        if (window.innerWidth <= 768 && navContainer) {
            navContainer.classList.remove('active');
            void navContainer.offsetHeight; // Forzar reflow
        }
    }

    fixMobileLayout();
    window.addEventListener('resize', fixMobileLayout);
});

