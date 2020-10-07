import Sprite from "../lib/Sprite";
import Container from "../lib/Container";

class LogoScreen extends Container {
  constructor(config = {}) {
    const { game, transitionFunction } = config;
    super();
    this.onDone = transitionFunction;
    this.life = 2;
    const logo = new Sprite({
      textureUrl: "./resources/logo-mompop.png",
      spawnPosition: {
        x: 220,
        y: 130,
      },
    });
    this.add(logo);
  }

  update(deltaTime, currentTime) {
    super.update(deltaTime, currentTime);

    console.log(deltaTime < this.life);

    this.life -= deltaTime;

    if (this.life < 0) {
      console.log("onDone");
      this.onDone();
    }
  }
}

export default LogoScreen;
