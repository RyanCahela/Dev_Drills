function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

function distance(positionObj1, positionObj2) {
  const deltaX = positionObj1.x - positionObj2.x;
  const deltaY = positionObj1.y - positionObj2.y;

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

export { clamp, distance };
