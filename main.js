const canvas = document.querySelector('.canvas');

const makeGrid = (rows = 16, cols = 16) => {
  canvas.style.setProperty('--grid-rows', rows);
  canvas.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < rows * cols; i++) {
    let pixel = document.createElement('div');
    canvas.appendChild(pixel).className = 'pixel';
  }
};

makeGrid();
