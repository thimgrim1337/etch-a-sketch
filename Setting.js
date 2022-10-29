class Setting {
  constructor(gridSize = 16) {
    this.gridSize = gridSize;
    this.setSize = (gridSize) => (this.gridSize = gridSize);
    this.getSize = () => this.gridSize;
  }
}
export default Setting;
