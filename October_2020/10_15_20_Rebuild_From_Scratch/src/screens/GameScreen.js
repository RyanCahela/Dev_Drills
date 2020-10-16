import Container from "../lib/Container";
import Text from "../lib/Text";
import Snake from "../entities/Snake";
import math from "../util/math";

class GameScreen extends Container {
  constructor(config = {}) {
    const { game, nextScreenFunction, controls } = config;
    controls.reset();
    super();
    const score = new Text({
      text: "Score: 0",
      styles: {
        fill: "tomato",
        align: "center",
        font: "20pt serif",
      },
      spawnPosition: {
        x: game.width / 2,
        y: 50,
      },
    });
    const snake = new Snake({
      spawnPosition: {
        x: math.randomInt(game.width),
        y: math.randomInt(game.height),
      },
      controls,
    });
    this.add(score);
    this.add(snake);

    this.loadTitleScreen = nextScreenFunction;
  }

  update(deltaTime, currentTime) {
    super.update(deltaTime, currentTime);
  }
}

export default GameScreen;
