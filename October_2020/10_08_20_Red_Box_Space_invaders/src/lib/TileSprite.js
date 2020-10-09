import Sprite from "./Sprite";

class TileSprite extends Sprite {
  constructor(config = {}) {
    const { textureUrl, tileWidth, tileHeight, frame, spawnPosition } = config;
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
