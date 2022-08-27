const header = document.querySelector('.header');
const btnMenu = document.querySelector('.btn-menu');

btnMenu.addEventListener('click', () => {
    header.classList.toggle('menu-open');
});