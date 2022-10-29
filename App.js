import Grid from './Grid.js';
import Setting from './Setting.js';
import Draw from './Draw.js';

class App {
  constructor() {
    this.canvas = document.querySelector('.canvas');
    this.gridLabel = document.querySelector('[for="gridSize"]');

    this.setting = new Setting();

    this.render(this.canvas, this.setting.getSize());

    this.draw = new Draw();
    this.draw.setPixels(Grid.getGrid(this.canvas));

    document
      .querySelector('[data-option="clear"]')
      .addEventListener('click', () => Grid.clearGrid(this.canvas));

    document.querySelector('#gridSize').addEventListener('change', (e) => {
      this.setting.setSize(e.target.value);
      this.render(this.canvas, this.setting.getSize());
      this.draw.setPixels(Grid.getGrid(this.canvas));
    });
  }

  render(canvas, size) {
    Grid.removeGrid(canvas);
    Grid.makeGrid(canvas, size);
    this.gridLabel.textContent = `${this.setting.getSize()} x ${this.setting.getSize()} `;
  }
}
export default App;
