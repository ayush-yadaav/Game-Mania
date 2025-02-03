document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navItem = document.getElementById('nav-item');

    menuToggle.addEventListener('click', function () {
        navItem.classList.toggle('active');
    });
});
