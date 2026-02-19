// Simple script to add some fun to the slime page

document.addEventListener('DOMContentLoaded', function () {
    // Add click effect to products
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', function () {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Change header color on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#ff1493'; // Deep pink
        } else {
            header.style.backgroundColor = '#ff69b4'; // Hot pink
        }
    });

    // Alert on contact click
    const contactSection = document.getElementById('contact');
    contactSection.addEventListener('click', function () {
        alert('Thanks for your interest in Time4Slime! We\'ll get back to you soon!');
    });
});