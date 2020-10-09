import Container from "../lib/Container";
import Text from "../lib/Text";

class LogoScreen extends Container {
  constructor(config = {}) {
    const {
      dimentions: { width, height },
      nextScreenFunction,
    } = config;
    super();

    this.height = height;
    this.width = width;
    this.splashDuration = 2;
    this.currentSpashTime = 0;
    this.onSpashDone = nextScreenFunction;
    this.add(
      new Text({
        text: "Electron Apps",
        styles: {
          fill: "blue",
          align: "center",
          font: "20pt serif",
        },
        spawnPosition: {
          x: this.width / 2,
          y: this.height / 2,
        },
      })
    );
  }

  update(deltaTime, currentTime) {
    if (deltaTime < this.splashDuration) {
      this.currentSpashTime += deltaTime;
    }

    if (this.currentSpashTime > this.splashDuration) {
      this.onSpashDone();
    }
  }
}

export default LogoScreen;
