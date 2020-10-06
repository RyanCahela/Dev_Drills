import { distance as mathDistance } from "./math";

const centerPosition = (entity) => {
  const centerX = entity.tileWidth / 2;
  const centerY = entity.tileHeight / 2;
  return {
    x: entity.position.x + centerX,
    y: entity.position.y + centerY,
  };
};

const distance = (entity1, entity2) => {
  return mathDistance(centerPosition(entity1), centerPosition(entity2));
};

export { distance, centerPosition };
