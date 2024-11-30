function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    navbar.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close menu when a link is clicked
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        
        navbar.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});