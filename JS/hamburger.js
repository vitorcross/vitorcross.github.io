const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-link');

const toggleMenu = function () {
  menu.classList.contains('mobile-show')
    ? menu.classList.remove('mobile-show')
    : menu.classList.toggle('mobile-show');
};

hamburger.addEventListener(
  'click',
  function (e) {
    toggleMenu();
  },
  false
);
