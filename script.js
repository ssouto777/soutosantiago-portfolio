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

// Form submission using Formspree (no redirect)
if (form) { // check if form exists
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // stop default submit

        const data = new FormData(form);
        const action = form.action;

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Thanks! Your message has been sent.');
                form.reset();
            } else {
                alert('Oops! There was a problem sending your message.');
            }
        } catch (error) {
            alert('Oops! There was a problem sending your message.');
            console.error(error);
        }
    });
}