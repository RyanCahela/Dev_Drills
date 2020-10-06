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

    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
  }

  convertPixlePositionToGridPosition(pixelPosition) {
    return {
      x: Math.floor(pixelPosition.x / this.tileWidth),
      y: Math.floor(pixelPosition.y / this.tileHeight),
    };
  }

  convertGridPositionToPixlePosition(gridPosition) {
    return {
      x: gridPosition.x * this.tileWidth,
      y: gridPosition.y * this.tileHeight,
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

  setTileFrameByPixlePosition(pixlePosition, newFrame) {
    const tile = this.getTileByPixlePosition(pixlePosition);
    tile.frame = newFrame;
  }
}

export default TileMap;
