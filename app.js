// getting element
const nav = document.getElementsByTagName('nav');
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');
const close_menu = document.querySelector('.close-menu');
const background = document.querySelector('.body-shaddow');

// display menu
menu_btn.addEventListener('click', displayMenu);

function displayMenu() {
    menu_btn.style.display = 'none';
    mobile_menu.style.display = 'block';
    background.style.display = 'block';
}

// close menu
close_menu.addEventListener('click', closeMenu);

function closeMenu() {
    menu_btn.style.display = 'block';
    mobile_menu.style.display = 'none';
    background.style.display = 'none';
}