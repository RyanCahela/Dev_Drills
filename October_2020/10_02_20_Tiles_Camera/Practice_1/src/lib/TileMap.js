import Container from "./Container";
import TileSprite from "./TileSprite";

class TileMap extends Container {
  constructor(config = {}) {
    const {
      frames,
      mapWidth,
      mapHeight,
      tileWidth,
      tileHeight,
      textureUrl,
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

    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }

  convertPixlePositionToGridPosition(pixlePosition) {
    return {
      x: Math.floor(pixlePosition.x / this.tileWidth),
      y: Math.floor(pixlePosition.y / this.tileHeight),
    };
  }

  convertGridPositionToPixlePosition(gridPosition) {
    return {
      x: gridPosition.x * tileWidth,
      y: gridPosition.y * tileHeight,
    };
  }

  getTileByGridPosition(gridPosition) {
    return this.nodes[gridPosition.y * this.mapWidth + gridPosition.x];
  }

  getTileByPixlePosition(pixlePosition) {
    return this.getTileByGridPosition(
      this.convertPixlePositionToGridPosition(pixlePosition)
    );
  }

  setTileFrameByGridPosition(gridPosition, newFrame) {
    const tile = this.getTileByGridPosition(gridPosition);
    if (!tile) throw Error("Tile not found");
    tile.frame = newFrame;
  }
}

export default TileMap;
