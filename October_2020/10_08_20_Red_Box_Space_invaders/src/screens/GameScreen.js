import Container from "../lib/Container";
import Text from "../lib/Text";

class GameScreen extends Container {
  constructor(config = {}) {
    const {
      dimentions: { width, height },
      controls,
      nextScreenFunction,
    } = config;
    super();
    this.width = width;
    this.height = height;
    this.controls = controls;
    this.onGameOver = nextScreenFunction;
    this.results = "foobar";
    this.inputDelay = 1;
    this.currentInputTime = 0;
    this.add(
      new Text({
        text: "gameScreen",
        styles: {
          fill: "green",
          align: "center",
          font: "40pt monospace",
        },
        spawnPosition: {
          x: width / 2,
          y: height / 2,
        },
      })
    );
  }

  update(deltaTime, currentTime) {
    if (deltaTime < this.inputDelay) {
      this.currentInputTime += deltaTime;
    }
    if (this.controls.action && this.currentInputTime > this.inputDelay) {
      this.onGameOver(this.results);
    }
  }
}

export default GameScreen;
