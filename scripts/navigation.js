// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
        hamburger.innerHTML = '✕';
    } else {
        hamburger.innerHTML = '☰';
    }
});

// Close menu on link click (mobile)
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('open');
            hamburger.innerHTML = '☰';
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('open');
        hamburger.innerHTML = '☰';
    }
});