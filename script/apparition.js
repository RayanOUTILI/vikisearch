window.addEventListener('load', function () {
    var searchButton = document.querySelector('.search-box button[type="submit"]');
    var searchBox = document.querySelector('.search-box');
    var logo = document.querySelector('#logo');
    var reveal = document.querySelector('.reveal');
    var firstResult = document.querySelector('.rectangle:first-child');
    var randomarticle = document.querySelector('.random-article');
    var blochistorique = document.querySelector('.bloc-historique');

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        searchBox.classList.add('active');
        logo.classList.add('active');
        reveal.classList.add('active');
        firstResult.classList.add('active');
        randomarticle.classList.add('suppr');
        blochistorique.classList.add('suppr');
    });

    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
});

