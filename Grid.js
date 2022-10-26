class Grid {
  constructor() {}
  static makeGrid = (canvas, size) => {
    canvas.style.setProperty('--grid-rows', size);
    canvas.style.setProperty('--grid-cols', size);

    for (let i = 0; i < size * size; i++) {
      let pixel = document.createElement('div');
      canvas.appendChild(pixel).className = 'pixel';
    }
  };
  static clearGrid = (canvas) => {
    canvas.innerHTML = '';
  };
}
export default Grid;
