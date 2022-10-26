class Draw {
  constructor(canvas) {
    this.canvas = canvas;
    let _isClicked = false;

    const pixels = document.querySelectorAll('.pixel').forEach((pixel) =>
      pixel.addEventListener('mouseout', (e) => {
        if (_isClicked) this.draw(e);
      })
    );

    this.draw = (e) => {
      e.target.style.backgroundColor = 'black';
    };

    this.toggleClick = () => {
      _isClicked = !_isClicked;
    };

    this.canvas.addEventListener('mousedown', this.toggleClick);
    this.canvas.addEventListener('mouseup', this.toggleClick);
  }
}
export default Draw;
