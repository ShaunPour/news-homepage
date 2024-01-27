const showMenu = document.querySelector('.menu-show');
const menu = document.querySelector('.menu-list');

showMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-hide');
    if (menu.classList.contains('menu-hide')) {
        showMenu.src = "./assets/images/icon-menu.svg";
    } else {
        showMenu.src = "./assets/images/icon-menu-close.svg";
    }
});