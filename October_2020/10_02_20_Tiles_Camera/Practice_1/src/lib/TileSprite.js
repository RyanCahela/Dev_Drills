import Sprite from "./Sprite";

class TileSprite extends Sprite {
  constructor(config = {}) {
    const {
      tileWidth = 32,
      tileHeight = 32,
      frame = { x: 0, y: 0 },
      textureUrl = "./resources/place_holder.png",
      spawnPosition,
      anchor,
      scale,
      rotation,
      pivot,
    } = config;
    super({
      textureUrl,
      spawnPosition,
      anchor,
      scale,
      rotation,
      pivot,
    });

    this.tileHeight = tileHeight;
    this.tileWidth = tileWidth;
    this.width = tileWidth;
    this.height = tileHeight;
    this.frame = frame;
  }
}

export default TileSprite;
