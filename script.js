document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        navLinks.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    });
});
