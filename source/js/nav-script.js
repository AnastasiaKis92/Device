// Submenu
let navSubmenu = document.querySelector('.main-nav-submenu');
let navToggle = document.querySelector('.main-nav-catalog__toggle');

navToggle.addEventListener('click', function () {
  if (navSubmenu.classList.contains('main-nav-submenu--closed')) {
    navSubmenu.classList.remove('main-nav-submenu--closed');
    navToggle.classList.add('main-nav-catalog__toggle--opened');
  } else {
    navSubmenu.classList.add('main-nav-submenu--closed');
    navToggle.classList.remove('main-nav-catalog__toggle--opened');
  }
});

// Popover
let navPopover = document.querySelector('.popover');
let navCart = document.querySelector('.main-nav-user__link--cart');

navCart.addEventListener('click', function () {
  if (navPopover.classList.contains('popover--closed')) {
    navPopover.classList.remove('popover--closed');
  } else {
    navPopover.classList.add('popover--closed');
  }
});