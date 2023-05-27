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

window.addEventListener(
  'resize',
  function (e) {
    if (window.innerWidth > 1279) {
      menu.classList.remove('mobile-show');
    }
  },
  false
);

window.addEventListener(
  'click',
  function (e) {
    if (
      !hamburger.contains(e.target) &&
      !menu.contains(e.target) &&
      menu.classList.contains('mobile-show')
    ) {
      menu.classList.remove('mobile-show');
    }
  },
  false
);
