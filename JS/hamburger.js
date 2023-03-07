const dropdownMenu = document.querySelector('#hamburger');
const dropdownBtn = document.querySelector('#btn');

const toggleDropdown = function () {
  dropdownMenu.classList.toggle('show');
};

dropdownBtn.addEventListener(
  'click',
  function (e) {
    e.stopPropagation();
    toggleDropdown();
  },
  false
);
