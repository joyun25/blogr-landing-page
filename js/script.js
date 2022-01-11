const openMenu = document.querySelector('.img-openMenu');
const closeMenu = document.querySelector('.img-closeMenu');
const menu = document.querySelector('.menu');
const submenuTitles = document.querySelectorAll('.submenuTitle');
const submenus = document.querySelectorAll('.submenu');

submenuTitles.forEach((submenuTitle, index) => {
    submenuTitle.addEventListener('click', () => {
        if (submenuTitle.classList.contains('submenuTitle-clicked')) {
            submenuTitle.classList.remove('submenuTitle-clicked');
        }else{
            submenuTitles.forEach((submenuTitle) => {
                submenuTitle.classList.remove('submenuTitle-clicked');
            });
            submenuTitle.classList.add('submenuTitle-clicked');
        }

        if (submenus[index].classList.contains('d-none')) {
            submenus.forEach((submenu) => {
                submenu.classList.add('d-none');
            });
            submenus[index].classList.remove('d-none');
        }else{
            submenus[index].classList.add('d-none');
        }
    });
});

openMenu.addEventListener('click', () => {
    openMenu.classList.add('d-pad-none');
    closeMenu.classList.remove('d-pad-none');
    menu.classList.remove('d-pad-none');
});

closeMenu.addEventListener('click', () => {
    closeMenu.classList.add('d-pad-none');
    openMenu.classList.remove('d-pad-none');
    menu.classList.add('d-pad-none');
});