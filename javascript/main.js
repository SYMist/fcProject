const boxEl = document.querySelector('.box');
const isContains = boxEl.classList.contains('active');

if (isContains) {
  console.log('포함됨!');
} else {
  console.log('포함되지 않음!');
}