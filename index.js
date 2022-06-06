// Import stylesheets
import './style.css';

const mainModal = document.querySelector('.main-modal');
const challengeBtn = document.getElementById('challenge');

mainModal.addEventListener('click', (e) => closeHandling(e));

challengeBtn.addEventListener('click', openModal);

document.querySelector('#start').addEventListener('click', () => {
  mainModal.innerHTML = ``;
  const startElement = document.createElement('h2');
  startElement.textContent = 'Start';
  startElement.classList.add('start');
  mainModal.appendChild(startElement);
});

function closeHandling(e) {
  if (
    e.target === document.querySelector('svg') ||
    e.target === document.querySelector('svg')?.firstElementChild ||
    e.target === document.querySelector('#surrender')
  ) {
    mainModal.style.display = 'none';
  }
}

function openModal() {
  mainModal.style.display = 'flex';
}
