const togglemenu = document.querySelector('.menu');
const navmenu = document.querySelector('.nav-menu');

togglemenu.addEventListener('click', () => {
    navmenu.classList.toggle('nav-menu_visible');
    });