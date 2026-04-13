

document.addEventListener('DOMContentLoaded', function () {

    /* ── FILTROS ── */
    var filtros  = document.querySelectorAll('.pry-filtro');
    var cards    = document.querySelectorAll('#pry-grid .pry-card');
    var destProj = document.querySelector('.pry-destacado');

    filtros.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var filtro = btn.getAttribute('data-filtro');

            
            filtros.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            
            cards.forEach(function (card) {
                var cats = card.getAttribute('data-cat') || '';
                if (filtro === 'all' || cats.indexOf(filtro) !== -1) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            
            if (destProj) {
                var destCats = destProj.getAttribute('data-cat') || '';
                if (filtro === 'all' || destCats.indexOf(filtro) !== -1) {
                    destProj.classList.remove('hidden');
                } else {
                    destProj.classList.add('hidden');
                }
            }
        });
    });


    var allCards = document.querySelectorAll('.pry-card, .pry-destacado');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    allCards.forEach(function (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

});
