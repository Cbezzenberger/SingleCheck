const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const entryCard = document.getElementById('entry-card');
const resultCard = document.getElementById('result-card');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    return;
  }

  resultText.textContent = `No, ${name} is not single.`;
  entryCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
  resultCard.classList.remove('pop');
  void resultCard.offsetWidth;
  resultCard.classList.add('pop');
});

restartButton.addEventListener('click', () => {
  resultCard.classList.add('hidden');
  resultCard.classList.remove('pop');
  entryCard.classList.remove('hidden');
  resultText.textContent = '';
  form.reset();
  nameInput.focus();
});
