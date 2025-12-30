// Select elements
const navLinks = document.querySelectorAll('.nav-links a');
const navLinksContainer = document.querySelector('.nav-links');
const menuButton = document.createElement('div');
const form = document.querySelector('form');

// Create hamburger menu button
menuButton.classList.add('menu-btn');
menuButton.innerHTML = '&#9776;'; // hamburger icon
document.querySelector('nav').appendChild(menuButton);

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu on link click (mobile only)
        if(navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    });
});

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Simple form submission feedback (doesn't actually send email)
if (form) { // Check if form exists
    form.addEventListener('submit', e => {
        e.preventDefault();
        form.reset();
    });
}