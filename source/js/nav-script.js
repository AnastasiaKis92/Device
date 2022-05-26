// Submenu
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

// Popover
let navPopover = document.querySelector('.popover');
let navCart = document.querySelector('.main-nav-user__link--cart');

navCart.addEventListener('click', function () {
  if (navPopover.classList.contains('popover--opened')) {
    navPopover.classList.remove('popover--opened');
    navPopover.classList.add('popover--closed');
  } else {
    navPopover.classList.remove('popover--closed');
    navPopover.classList.add('popover--opened');
  }
});