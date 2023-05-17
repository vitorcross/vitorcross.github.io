const buttons = document.querySelectorAll('.btn');
const description = document.querySelectorAll('.text-hidden');

function toggleDescription(e) {
  let textDescription = e.currentTarget.nextElementSibling;
  textDescription.classList.toggle('text-show');
}

buttons.forEach((btn) => {
  btn.addEventListener('click', toggleDescription, false);
});
