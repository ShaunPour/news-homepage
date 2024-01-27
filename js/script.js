const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-list');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-hide');
    if (menu.classList.contains('menu-hide')) {
        menuIcon.src = "./assets/images/icon-menu.svg";
    } else {
        menuIcon.src = "./assets/images/icon-menu-close.svg";
    }
});