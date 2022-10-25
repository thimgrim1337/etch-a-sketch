const canvas = document.querySelector('.canvas');
let isClicked = false;

const makeGrid = (rows = 16, cols = 16) => {
  canvas.style.setProperty('--grid-rows', rows);
  canvas.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < rows * cols; i++) {
    let pixel = document.createElement('div');
    canvas.appendChild(pixel).className = 'pixel';
  }
};

makeGrid();

const logText = () => {
  console.log('Działa');
};

const draw = (e) => {
  e.target.style.backgroundColor = 'black';
};

const toggleClick = () => (isClicked = !isClicked);

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) =>
  pixel.addEventListener('mouseout', (e) => {
    if (isClicked) draw(e);
  })
);

canvas.addEventListener('mousedown', toggleClick);
canvas.addEventListener('mouseup', toggleClick);
