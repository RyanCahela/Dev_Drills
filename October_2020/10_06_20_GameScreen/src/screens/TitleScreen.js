import Container from "../lib/Container";
import Text from "../lib/Text";

class TitleScreen extends Container {
  constructor(config = {}) {
    super();
    const { game, controls, transitionFunction } = config;
    this.controls = controls;
    this.onStart = transitionFunction;
    controls.reset();
    const title = new Text({
      text: "SquizzBall!",
      styles: {
        fill: "red",
        font: "20pt monospace",
        align: "center",
      },
      spawnPosition: {
        x: game.width / 2,
        y: game.height / 2,
      },
    });
    const startInstructions = new Text({
      text: "press spacebar to start",
      styles: {
        fill: "lightgrey",
        font: "10px sans-serif",
        align: "center",
      },
      spawnPosition: {
        x: game.width / 2,
        y: game.height / 2 + 200,
      },
    });

    this.add(title);
    this.add(startInstructions);
    this.title = title;
  }

  update(deltaTime, currentTime) {
    this.title.position.y += Math.sin(currentTime / 300) * 0.3;
    if (this.controls.action) {
      this.onStart();
    }
  }
}

export default TitleScreen;
