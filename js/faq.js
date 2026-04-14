document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL ACORDEÓN FAQ ---
    const faqHeaders = document.querySelectorAll('.pregunta-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;

            // Cierra las otras preguntas al abrir una nueva
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Abre o cierra la pregunta actual
            currentItem.classList.toggle('active');
        });
    });
});