import Container from "./Container";
import TileSprite from "./TileSprite";

class TileMap extends Container {
  constructor(config = {}) {
    const {
      textureUrl,
      frames,
      mapWidth,
      mapHeight,
      tileWidth,
      tileHeight,
    } = config;
    super();

    this.nodes = frames.map((frame, index) => {
      return new TileSprite({
        textureUrl,
        tileWidth,
        tileHeight,
        frame,
        spawnPosition: {
          x: (index % mapWidth) * tileWidth,
          y: Math.floor(index / mapWidth) * tileHeight,
        },
      });
    });
  }
}

export default TileMap;
