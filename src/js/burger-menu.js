const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.burger');
const closeMenu = document.querySelector('.burger-close');
const items = document.querySelectorAll('.burger-menu__item');

burger.addEventListener('click', function () {
    menu.style.opacity = 1;
    menu.style.visibility = "visible";
    menu.style.left = 0;
    document.body.style.overflowY = "hidden"
})


closeMenu.addEventListener('click', closemenu)

items.forEach(item => item.addEventListener('click', closemenu))


function closemenu() {
    menu.style.left = "100%";
    menu.style.opacity = 0;
    menu.style.visibility = "hidden";
    document.body.style.overflowY = "auto"
}