let mobileWidth = 320;
let tabletWidth = 768;
let desktopWidth = 1440;

let deviceWidth = document.body.clientWidth;

let index = document.querySelector('.page--index');

// Menu

let menu = document.querySelector('.page-header__menu');
let menuWrapper = menu.querySelector('.page-header__menu-wrapper');
let menuLogoImage = menu.querySelector('.page-header__logo-image');
let menuToggle = menu.querySelector('.page-header__menu-toggle');

menu.classList.add('page-header__menu--closed');
menuWrapper.classList.add('page-header__menu-wrapper--closed');
menuLogoImage.classList.add('page-header__logo-image--closed');
menuToggle.classList.add('page-header__menu-toggle--closed');

menuToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menuToggle.classList.contains('page-header__menu-toggle--closed')) {
    menu.classList.remove('page-header__menu--closed');
    menu.classList.add('page-header__menu--active');
    menuWrapper.classList.remove('page-header__menu-wrapper--closed');
    menuLogoImage.classList.remove('page-header__logo-image--closed');
    menuToggle.classList.remove('page-header__menu-toggle--closed');
    menuToggle.classList.add('page-header__menu-toggle--active');
  } else {
    menu.classList.remove('page-header__menu--active');
    menu.classList.add('page-header__menu--closed');
    menuWrapper.classList.add('page-header__menu-wrapper--closed');
    menuLogoImage.classList.add('page-header__logo-image--closed');
    menuToggle.classList.remove('page-header__menu-toggle--active');
    menuToggle.classList.add('page-header__menu-toggle--closed');
  }
});

// Business-modal

if (index) {
  let rates = document.querySelector('.rates');
  let businessPopup = rates.querySelector('.rates__business-popup');
  let businessPopupOpen = rates.querySelector('.rates__business-rates');
  let businessPopupClose = rates.querySelector('.rates__close-popup');

  businessPopup.classList.remove('rates__business-popup--active');
  businessPopupOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    businessPopup.classList.add('rates__business-popup--active');
  })

  businessPopupClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    businessPopup.classList.remove('rates__business-popup--active');
  })
}
