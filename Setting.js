import Grid from './Grid.js';
class Setting {
  constructor(gridSize = 16, color = '#000') {
    this.gridSize = gridSize;
    this.color = color;
    this.setSize = (gridSize) => (this.gridSize = gridSize);
    this.getSize = () => this.gridSize;
  }
}
export default Setting;
