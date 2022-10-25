const canvas = document.querySelector('.canvas');

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('pixel');
  canvas.appendChild(div);
}
