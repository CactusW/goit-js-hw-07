function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value.trim(), 10);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a number between 1 and 100');
      input.value = '';
      return;
    }

    createBoxes(amount);
    input.value = '';
  });

  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // Clear previous boxes

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});