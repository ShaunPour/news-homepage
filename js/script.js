const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-list');
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-hide');
    if (menu.classList.contains('menu-hide')) {
        menuIcon.src = "./assets/images/icon-menu.svg";
        body.style.background = 'inherit';
    } else {
        menuIcon.src = "./assets/images/icon-menu-close.svg";
        body.style.background = 'hsl(236, 13%, 42%)';
        body.style.overflow = 'hidden';
    }
});