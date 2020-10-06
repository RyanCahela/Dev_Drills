import TileSprite from "../lib/TileSprite";

class Squizz extends TileSprite {
  constructor(config = {}) {
    const { spawnPosition, controls } = config;
    const textureUrl = "./resources/player-walk.png";
    super({
      spawnPosition,
      textureUrl,
      tileWidth: 32,
      tileHeight: 32,
    });

    this.controls = controls;
    this.speed = 100;
    this.direction = { x: 0, y: 0 };
  }

  update(deltaTime, currenTime) {
    const { controls, direction, speed } = this;
    if (controls.x && controls.x !== direction.x) {
      this.direction.x = controls.x;
      this.direction.y = 0;
      this.position.y =
        Math.round(this.position.y / this.tileWidth) * this.tileWidth;
    } else if (controls.y && controls.y !== direction.y) {
      this.direction.y = controls.y;
      this.direction.x = 0;
      this.position.x =
        Math.round(this.position.x / this.tileHeight) * this.tileHeight;
    }

    this.position.x += this.direction.x * this.speed * deltaTime;
    this.position.y += this.direction.y * this.speed * deltaTime;
  }
}

export default Squizz;
