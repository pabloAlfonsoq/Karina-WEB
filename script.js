console.log('Karina Nuñez Website Loaded');

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');

    // Animate hamburger to X (optional enhancement)
    mobileMenuBtn.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Contact Form to WhatsApp
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const whatsappNumber = '595962325570';
        const text = `Hola Lic. Karina, soy ${name}.%0A%0AMi correo es: ${email}%0A%0AConsulta: ${message}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');

        // Optional: Reset form
        contactForm.reset();
    });
}

