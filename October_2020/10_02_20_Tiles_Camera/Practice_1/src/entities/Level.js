import TileMap from "../lib/TileMap";

class Level extends TileMap {
  constructor(config = {}) {
    const { width, height } = config;
    const tileSize = 32;
    const mapWidth = Math.floor(width / tileSize);
    const mapHeight = Math.floor(height / tileSize);
    const frames = [];
    for (let x = 0; x < mapWidth; x++) {
      for (let y = 0; y < mapHeight; y++) {
        frames.push({
          x: 1,
          y: 0,
        });
      }
    }
    super({
      textureUrl: "./resources/tiles.png",
      frames,
      mapWidth,
      mapHeight,
      tileWidth: tileSize,
      tileHeight: tileSize,
    });
    this.bounds = {
      top: tileSize,
      left: tileSize,
      right: width - tileSize * 2,
      bottom: height - tileSize * 2,
    };
    this.lastTile = null;
    this.spaceTileFrame = { x: 0, y: 0 };
    this.width = width;
    this.height = height;
  }

  checkGround(playerPixlePosition) {
    const currentTile = this.getTileByPixlePosition(playerPixlePosition);
    if (currentTile === this.lastTile) {
      return "same tile";
    }
    this.lastTile = currentTile;

    if (currentTile.frame !== this.spaceTileFrame) {
      this.setTileFrameByGridPosition(
        this.convertPixlePositionToGridPosition(playerPixlePosition),
        this.spaceTileFrame
      );
      return "set";
    }

    return "just crossed a space tile";
  }
}

export default Level;
