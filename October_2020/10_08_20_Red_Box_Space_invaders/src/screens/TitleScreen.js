import Container from "../lib/Container";
import Text from "../lib/Text";

class TitleScreen extends Container {
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
    this.onGameStart = nextScreenFunction;
    this.inputDelay = 1;
    this.currentInputTime = 0;
    this.add(
      new Text({
        text: "title screen",
        styles: {
          fill: "mediumseagreen",
          font: "30pt impact",
          align: "center",
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
      this.onGameStart();
    }
  }
}

export default TitleScreen;
