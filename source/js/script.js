var mobileWidth = 320;
var tabletWidth = 768;
var desktopWidth = 1440;

var deviceWidth = document.body.clientWidth;

var index = document.querySelector('.page--index');
var form = document.querySelector('.page--form');
var catalog = document.querySelector('.page--catalog');

// Menu toggle

var menu = document.querySelector('.page-header__menu');
var menuWrapper = menu.querySelector('.page-header__menu-wrapper');
var menuLogoImage = menu.querySelector('.page-header__logo');
var menuToggle = menu.querySelector('.page-header__menu-toggle');
var menuNavigation = menu.querySelector('.page-header__navigation');
var openIcon = menuToggle.querySelector('.page-header__menu-open');

menu.classList.add('page-header__menu--menu-closed');
menuWrapper.classList.add('page-header__menu-wrapper--menu-closed');
menuLogoImage.classList.add('page-header__logo--menu-closed');
menuToggle.classList.add('page-header__menu-toggle--menu-closed');

menuToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menuToggle.classList.contains('page-header__menu-toggle--menu-closed')) {
    menu.classList.remove('page-header__menu--menu-closed');
    menuWrapper.classList.remove('page-header__menu-wrapper--menu-closed');
    menuLogoImage.classList.remove('page-header__logo--menu-closed');
    menuToggle.classList.remove('page-header__menu-toggle--menu-closed');

    menu.classList.add('page-header__menu--menu-active');
    menuToggle.classList.add('page-header__menu-toggle--menu-active');
  } else {
    if (menuToggle.classList.contains('page-header__menu-toggle--menu-active')) {
      menu.classList.remove('page-header__menu--menu-active');
      menuToggle.classList.remove('page-header__menu-toggle--menu-active');

      menu.classList.add('page-header__menu--menu-closed');
      menuWrapper.classList.add('page-header__menu-wrapper--menu-closed');
      menuLogoImage.classList.add('page-header__logo--menu-closed');
      menuToggle.classList.add('page-header__menu-toggle--menu-closed');
    }
  }
})

// Menu scroll

window.addEventListener('scroll', function() {
  menu.classList.add('page-header__menu--menu-closed-scroll');
  menuLogoImage.classList.add('page-header__logo--menu-scroll');
  menuNavigation.classList.add('navigation--menu-scroll');
  openIcon.classList.add('page-header__menu-open--menu-scroll');
  if (menuToggle.classList.contains('page-header__menu-toggle--menu-closed') && window.pageYOffset === 0) {
    menu.classList.remove('page-header__menu--menu-closed-scroll');
    menuLogoImage.classList.remove('page-header__logo--menu-scroll');
    menuNavigation.classList.remove('navigation--menu-scroll');
    openIcon.classList.remove('page-header__menu-open--menu-scroll');
  }
})

// Business-modal

if (index) {
  var rates = document.querySelector('.rates');
  var businessPopup = rates.querySelector('.rates__business-popup');
  var businessPopupOpen = rates.querySelector('.rates__business-rates');
  var businessPopupClose = rates.querySelector('.rates__close-popup');

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

// Companion filter {

if (catalog) {
  var filterFieldsets = document.querySelectorAll('.companion-filter__fieldset');

  for (var i = 0; i < filterFieldsets.length; i++) {
    filterFieldsets[i].classList.remove('companion-filter__fieldset--nojs');
    filterFieldsets[i].addEventListener('click', function() {
      if (filterFieldsets[i].classList.contains('companion-filter__fieldset--hidden')) {
        filterFieldsets[i].classList.remove('companion-filter__fieldset--hidden');
      } else {
        filterFieldsets[i].classList.add('companion-filter__fieldset--hidden')
      }
    })
  }
}

// Likes toggler

if (catalog) {
  var likesTogglers = document.querySelectorAll('.companion-cards__likes-toggle');
  var likesIcons = document.querySelectorAll('.companion-cards__likes-icon');

  for (var i = 0; i < likesTogglers.length; i++) {
    likesTogglers[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      if (likesTogglers[i].classList.contains('companion-cards__likes-toggle--active')) {
        likesTogglers[i].classList.remove('companion-cards__likes-toggle--active');
        likesIcons[i].classList.remove('companion-cards__likes-icon--active')
      } else {
        likesTogglers[i].classList.add('companion-cards__likes-toggle--active');
        likesIcons[i].classList.add('companion-cards__likes-icon--active')
      }
    })
  }
}

// Choose country toggle

var countryPickers = document.querySelectorAll('.country-picker--choose');

for (var i = 0; i < countryPickers.length; i++) {
  var countryPickerButton = countryPickers[i].querySelector('.country-picker__button');
  countryPickerButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (countryPickerButton.parentElement.classList.contains('country-picker--choose-active')) {
      countryPickerButton.parentElement.classList.remove('country-picker--choose-active');
    } else {
      countryPickerButton.parentElement.classList.add('country-picker--choose-active');
    }
  })
}
