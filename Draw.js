class Draw {
  constructor(canvas) {
    this.canvas = canvas;
    this.isErase = false;
    this.isClicked = false;
    this.color = '#000';

    const pixels = document.querySelectorAll('.pixel').forEach((pixel) =>
      pixel.addEventListener('mouseout', (e) => {
        if (this.isClicked) this.draw(e);
      })
    );

    this.draw = (e) => {
      if (this.isClicked) e.target.style.backgroundColor = this.color;
      if (this.isClicked && this.isErase) e.target.style.backgroundColor = '';
    };

    this.toggleClick = () => {
      this.isClicked = !this.isClicked;
    };
    this.toggleErase = () => {
      this.isErase = !this.isErase;
    };

    this.changeColor = (e) => {
      this.color = e.target.value;
    };

    this.canvas.addEventListener('mousedown', this.toggleClick);
    this.canvas.addEventListener('mouseup', this.toggleClick);
    document
      .querySelector('[data-option="erase"]')
      .addEventListener('click', this.toggleErase);

    document
      .querySelector('#colorPicker')
      .addEventListener('change', this.changeColor);
  }
}
export default Draw;
