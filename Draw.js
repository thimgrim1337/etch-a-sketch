class Draw {
  constructor(canvas, isErase) {
    this.canvas = canvas;
    this.isErase = isErase;
    this.isClicked = false;

    const pixels = document.querySelectorAll('.pixel').forEach((pixel) =>
      pixel.addEventListener('mouseout', (e) => {
        if (this.isClicked) this.draw(e);
      })
    );

    this.draw = (e) => {
      if (this.isClicked) e.target.style.backgroundColor = 'black';
      if (this.isClicked && this.isErase) e.target.style.backgroundColor = '';
    };

    this.toggleClick = () => {
      this.isClicked = !this.isClicked;
    };

    this.canvas.addEventListener('mousedown', this.toggleClick);
    this.canvas.addEventListener('mouseup', this.toggleClick);
    document
      .querySelector('[data-option="erase"]')
      .addEventListener('click', () => {
        this.isErase = !this.isErase;
      });
  }
}
export default Draw;
