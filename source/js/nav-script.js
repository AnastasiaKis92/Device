let navSubmenu = document.querySelector('.main-nav-submenu');
let navToggle = document.querySelector('.main-nav-catalog__toggle');

navToggle.addEventListener('click', function () {
  if (navSubmenu.classList.contains('main-nav-submenu--closed')) {
    navSubmenu.classList.remove('main-nav-submenu--closed');
    navSubmenu.classList.add('main-nav-submenu--opened');
    navToggle.classList.remove('main-nav-catalog__toggle--closed');
    navToggle.classList.add('main-nav-catalog__toggle--opened');
  } else {
    navSubmenu.classList.add('main-nav-submenu--closed');
    navSubmenu.classList.remove('main-nav-submenu--opened');
    navToggle.classList.add('main-nav-catalog__toggle--closed');
    navToggle.classList.remove('main-nav-catalog__toggle--opened');
  }
});
