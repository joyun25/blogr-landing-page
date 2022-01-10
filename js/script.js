const submenuTitles = document.querySelectorAll('.submenuTitle');
const submenus = document.querySelectorAll('.submenu');

submenuTitles.forEach((submenuTitle, index) => {
    submenuTitle.addEventListener('click', () => {
        if (submenuTitle.classList.contains('submenuTitle-clicked')) {
            submenuTitle.classList.remove('submenuTitle-clicked');
        }else{
            submenuTitle.classList.add('submenuTitle-clicked');
        }

        if (submenus[index].classList.contains('d-none')) {
            submenus[index].classList.remove('d-none');
        }else{
            submenus[index].classList.add('d-none');
        }
    });
});