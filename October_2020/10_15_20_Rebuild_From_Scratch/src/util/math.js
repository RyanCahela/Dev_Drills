function randomFloat(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(randomFloat(min, max));
}

function distance(positionObj1, positionObj2) {
  const deltaX = positionObj1.x - positionObj2.x;
  const deltaY = positionObj1.y - positionObj2.y;

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

export default {
  randomFloat,
  randomInt,
  distance,
};
