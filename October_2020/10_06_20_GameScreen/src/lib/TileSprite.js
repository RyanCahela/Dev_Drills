import Sprite from "./Sprite";

class TileSprite extends Sprite {
  constructor(config = {}) {
    const {
      tileWidth,
      tileHeight,
      textureUrl,
      spawnPosition,
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
