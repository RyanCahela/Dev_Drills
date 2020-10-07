import Container from "../lib/Container";
import Text from "../lib/Text";

class GameOverScreen extends Container {
  constructor(config = {}) {
    super();
    const { game, controls, transitionFunction, results } = config;
    this.add(
      new Text({
        text: "GAME OVER",
        styles: {
          fill: "lightgreen",
          font: "20pt monospace",
          align: "center",
        },
        spawnPosition: {
          x: game.width / 2,
          y: game.height / 2,
        },
      })
    );
    this.controls = controls;
    this.onRestart = transitionFunction;
    console.log(results);
  }

  update(deltaTime, currentTime) {
    if (this.controls.action) {
      this.onRestart();
    }
  }
}

export default GameOverScreen;
