import Sprite from "./Sprite";

class TileSprite extends Sprite {
  constructor(config = {}) {
    const {
      textureUrl,
      spawnPosition,
      tileWidth = 32,
      tileHeight = 32,
      frame = { x: 0, y: 0 },
    } = config;
    super({
      textureUrl,
      spawnPosition,
    });
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.frame = frame;
  }
}

export default TileSprite;
