class Setting {
  constructor() {
    let _size = 16;
    this.setSize = (size) => (_size = size);
    this.getSize = () => _size;
  }
}
export default Setting;
