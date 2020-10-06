import TileSprite from "../lib/TileSprite";

class Enemy extends TileSprite {
  constructor(config = {}) {
    const { spawnPosition, direction = { x: 1, y: 0 } } = config;
    const tileSize = 32;
    super({
      textureUrl: "./resources/baddie-walk.png",
      tileWidth: tileSize,
      tileHeight: tileSize,
      spawnPosition,
    });
    this.direction = direction;
    this.speed = 100;
  }

  update(deltaTime, currentTime) {
    this.position.x += this.direction.x * this.speed * deltaTime;
    this.position.y += this.direction.y * this.speed * deltaTime;
  }
}

export default Enemy;
