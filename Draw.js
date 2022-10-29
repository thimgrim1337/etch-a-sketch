class Draw {
  constructor() {
    let _pixels = 0;
    let _isClicked = false;
    let _isErase = false;
    let _color = '#000000';
    const _colorPicker = document.querySelector('#colorPicker');
    const _eraseBtn = document.querySelector('[data-option="erase"]');
    this.getPixels = () => _pixels;
    this.setPixels = (pixels) => {
      _pixels = pixels;
      _color = '#000000';
      _colorPicker.value = _color;
      _pixels.forEach((pixel) =>
        pixel.addEventListener('mouseout', (e) => {
          if (_isClicked) this.draw(e);
        })
      );
    };

    this.draw = (e) => {
      if (_isClicked) e.target.style.backgroundColor = _color;
      if (_isClicked && _isErase) e.target.style.backgroundColor = '';
    };

    this.toggleClick = () => {
      _isClicked = !_isClicked;
    };

    this.toggleErase = () => {
      _isErase = !_isErase;
      _eraseBtn.classList.toggle('active');
    };

    this.changeColor = (e) => {
      _color = e.target.value;
    };

    document.addEventListener('mousedown', this.toggleClick);
    document.addEventListener('mouseup', this.toggleClick);
    _colorPicker.addEventListener('change', this.changeColor);
    _eraseBtn.addEventListener('click', this.toggleErase);
  }
}
export default Draw;
