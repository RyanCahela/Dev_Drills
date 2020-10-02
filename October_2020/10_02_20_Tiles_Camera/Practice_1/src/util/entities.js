import { distance } from "./math";

function center(entity) {
  const { position, width, height } = entity;
  return {
    x: position.x + width / 2,
    y: position.y + height / 2,
  };
}

function distance(entity1, entity2) {
  return distance(center(entity1), center(entity2));
}

export { center, distance };
