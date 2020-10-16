class KeyboardControls {
  constructor() {
    this.keys = {};
    this.keyCodes = {
      aKey: 65,
      wKey: 87,
      dKey: 68,
      sKey: 83,
      leftArrow: 37,
      upArrow: 38,
      rightArrow: 39,
      downArrow: 40,
      spacebar: 32,
    };

    document.addEventListener("keydown", (e) => this.handleKeydown(e), false);
    document.addEventListener("keyup", (e) => this.handleKeyup(e), false);
  }

  handleKeydown(e) {
    const {
      leftArrow,
      rightArrow,
      upArrow,
      downArrow,
      spacebar,
    } = this.keyCodes;
    if (
      [leftArrow, rightArrow, upArrow, downArrow, spacebar].includes(e.which)
    ) {
      e.preventDefault();
    }

    this.keys[e.which] = true;
  }

  handleKeyup(e) {
    this.keys[e.which] = false;
  }

  reset() {
    this.keys = {};
  }

  get x() {
    const { leftArrow, rightArrow, aKey, dKey } = this.keyCodes;
    const { keys } = this;
    if (keys[leftArrow] || keys[aKey]) {
      return -1;
    }

    if (keys[rightArrow] || keys[dKey]) {
      return 1;
    }

    return 0;
  }

  get y() {
    const { upArrow, downArrow, wKey, sKey } = this.keyCodes;
    const { keys } = this;

    if (keys[upArrow] || keys[wKey]) {
      return -1;
    }

    if (keys[downArrow] || keys[sKey]) {
      return 1;
    }

    return 0;
  }

  get action() {
    return this.keys[this.keyCodes.spacebar];
  }
}

export default KeyboardControls;
