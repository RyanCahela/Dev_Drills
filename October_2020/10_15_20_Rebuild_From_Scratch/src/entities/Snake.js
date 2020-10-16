import Sprite from "../lib/Sprite";

class Snake extends Sprite {
  constructor(config = {}) {
    const { spawnPosition = { x: 0, y: 0 }, controls } = config;
    super({
      textureUrl: "./resources/place_holder.png",
      spawnPosition,
    });
    this.controls = controls;
    console.log(controls);
    this.speed = 300;
  }

  update(deltaTime, currentTime) {
    console.log(this.controls.y);
    this.position.x += this.controls.x * this.speed * deltaTime;
    this.position.y += this.controls.y * this.speed * deltaTime;
  }
}

export default Snake;
