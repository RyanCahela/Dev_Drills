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

    this.lastTile = null;
    this.spaceTileFrame = { x: 0, y: 0 };
  }

  checkGround(playerPixelPosition) {
    const currentTile = this.getTileByPixlePosition(playerPixelPosition);
    if (currentTile === this.lastTile) {
      return "same tile";
    }

    if (currentTile !== this.lastTile) {
      this.setTileFrameByPixlePosition(playerPixelPosition, this.spaceTile);
      this.lastTile = currentTile;
      return "changed";
    }

    if (currentTile === this.spaceTileFrame) {
      return "cleared";
    }
  }
}

export default Level;
