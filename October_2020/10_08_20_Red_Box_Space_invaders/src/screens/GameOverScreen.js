import Container from "../lib/Container";
import Text from "../lib/Text";

class GameOverScreen extends Container {
  constructor(config = {}) {
    const {
      dimentions: { width, height },
      controls,
      nextScreenFunction,
      results,
    } = config;
    super();
    this.width = width;
    this.height = height;
    this.controls = controls;
    this.onGameRestart = nextScreenFunction;
    this.results = results;
    this.inputDelay = 1;
    this.currentInputTime = 0;
    this.add(
      new Text({
        text: `the results are ${this.results}.`,
        styles: {
          fill: "darkviolet",
          align: "center",
          font: "25pt Ariel",
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
      this.onGameRestart();
    }
  }
}

export default GameOverScreen;
