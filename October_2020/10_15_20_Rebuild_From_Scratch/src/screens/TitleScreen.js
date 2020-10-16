import Container from "../lib/Container";
import Text from "../lib/Text";

class TitleScreen extends Container {
  constructor(config = {}) {
    const { game, nextScreenFunction, controls } = config;
    super();
    controls.reset();
    const title = new Text({
      text: "insert title here",
      styles: {
        fill: "blue",
        font: "30pt impact",
        align: "center",
      },
      spawnPosition: {
        x: game.width / 2,
        y: game.height / 2,
      },
    });
    this.nextScreenFunction = nextScreenFunction;
    this.controls = controls;
    this.add(title);
  }

  update(deltaTime, currentTime) {
    if (this.controls.action) {
      this.nextScreenFunction();
    }
  }
}

export default TitleScreen;
