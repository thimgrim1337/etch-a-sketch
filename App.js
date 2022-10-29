import Grid from './Grid.js';
import Setting from './Setting.js';
import Draw from './Draw.js';

class App {
  constructor() {
    this.canvas = document.querySelector('.canvas');
    this.setting = new Setting();

    document.querySelector('#gridSize').addEventListener('change', (e) => {
      this.setting.setSize(e.target.value);
      this.render(this.canvas, this.setting.getSize());
    });

    document
      .querySelector('[data-option="clear"]')
      .addEventListener('click', () => Grid.clearGrid(this.canvas));

    this.render(this.canvas, this.setting.getSize());
  }

  render(canvas, size) {
    Grid.removeGrid(canvas);
    Grid.makeGrid(canvas, size);
    this.draw = new Draw(this.canvas);
  }
}
export default App;
