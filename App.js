import Grid from './Grid.js';
import Setting from './Setting.js';
import Draw from './Draw.js';

class App {
  constructor() {
    this.canvas = document.querySelector('.canvas');
    document
      .querySelector('[data-option="clear"')
      .addEventListener('click', () => Grid.clearGrid(this.canvas));

    this.setting = new Setting();

    document.querySelector('#gridSize').addEventListener('change', (e) => {
      this.setting.setSize(e.target.value);
      Grid.removeGrid(this.canvas);
      this.render();
    });

    this.render();
  }
  render() {
    Grid.makeGrid(this.canvas, this.setting.getSize());
    this.draw = new Draw(this.canvas);
  }
}
export default App;
