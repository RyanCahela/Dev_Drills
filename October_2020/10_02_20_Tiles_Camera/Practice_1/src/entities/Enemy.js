import TileSprite from "../lib/TileSprite";

class Enemy extends TileSprite {
  constructor(config = {}) {
    const { xSpeed, ySpeed, spawnPosition } = config;
    super({
      textureUrl: "./resources/baddie-walk.png",
      tileWidth: 32,
      tileHeight: 32,
      spawnPosition,
    });
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  update(deltaTime, currentTime) {
    this.position.x += this.xSpeed * deltaTime;
    this.position.y += this.ySpeed * deltaTime;
  }
}

export default Enemy;
