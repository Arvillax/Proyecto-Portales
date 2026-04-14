document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navContainer = document.querySelector('.nav-links-container');

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

    const menuItems = document.querySelectorAll('.menu-item-has-children');
    
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    menuItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('open')) {
                            otherItem.classList.remove('open');
                        }
                    });
                    
                    item.classList.toggle('open');
                }
            });
        }
    });

    const simpleLinks = document.querySelectorAll('.nav-links > li:not(.menu-item-has-children) a');
    simpleLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navContainer.classList.remove('active');
            }
        });
    });

    function fixMobileLayout() {
        if (window.innerWidth <= 768 && navContainer) {
            navContainer.classList.remove('active');
            void navContainer.offsetHeight;
        }
    }

    fixMobileLayout();
    window.addEventListener('resize', fixMobileLayout);
});