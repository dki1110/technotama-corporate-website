(function () {
    'use strict';

    // Marker class: CSS falls back to no-JS styles without it
    document.documentElement.classList.add('js');

    // Mobile nav toggle
    var header = document.querySelector('header');
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');

    if (header && toggle && menu) {
        var closeMenu = function () {
            header.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', function () {
            var isOpen = header.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        menu.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && header.classList.contains('nav-open')) {
                closeMenu();
                toggle.focus();
            }
        });

        document.addEventListener('click', function (event) {
            if (header.classList.contains('nav-open') && !header.contains(event.target)) {
                closeMenu();
            }
        });
    }

    // Scroll reveal
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
        return;
    }

    var targets = document.querySelectorAll('main .section, .cta-section');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    targets.forEach(function (el) {
        el.classList.add('reveal');
        observer.observe(el);
    });
})();
