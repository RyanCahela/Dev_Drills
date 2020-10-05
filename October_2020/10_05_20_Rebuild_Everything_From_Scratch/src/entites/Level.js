import TileMap from "../lib/TileMap";

class Level extends TileMap {
  constructor(config = {}) {
    const { width, height } = config;
    const textureUrl = "./resources/tiles.png";
    const tileSize = 32;
    const mapWidth = width / tileSize;
    const mapHeight = height / tileSize;
    const frames = [];
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        frames.push({
          x: 1,
          y: 0,
        });
      }
    }
    super({
      textureUrl,
      frames,
      mapWidth,
      mapHeight,
      tileWidth: tileSize,
      tileHeight: tileSize,
    });
  }
}

export default Level;
