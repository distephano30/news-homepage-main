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

// get screen width on resize to show and remove buttons
function onresize() {
    let width = document.body.clientWidth;
    if (width > 768) {
        menu_btn.style.display = 'none';
    } else {
        menu_btn.style.display = 'block';
    }
}

window.addEventListener('resize', onresize);




