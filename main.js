import Grid from './Grid.js';

const canvas = document.querySelector('.canvas');

let isClicked = false;

Grid.makeGrid(canvas, 16);

// const logText = () => {
//   console.log('Działa');
// };

// const draw = (e) => {
//   e.target.style.backgroundColor = 'black';
// };

// const changeSize = (e) => {
//   size = e.target.value;
//   canvas.innerHTML = '';
//   makeGrid(size);
// };

// const toggleClick = () => (isClicked = !isClicked);

// const pixels = document.querySelectorAll('.pixel');

// pixels.forEach((pixel) =>
//   pixel.addEventListener('mouseout', (e) => {
//     if (isClicked) draw(e);
//   })
// );

// range.addEventListener('change', changeSize);
// canvas.addEventListener('mousedown', toggleClick);
// canvas.addEventListener('mouseup', toggleClick);
