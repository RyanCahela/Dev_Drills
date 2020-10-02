const randomFloat = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
};

const randomInt = (min, max) => {
  return Math.floor(randomFloat(min, max));
};

const randomOneIn = (odds) => {
  return randomInt(odds) === 0;
};

const clamp = (val, min, max) => {
  return Math.max(min, Math.min(val, max));
};

export { randomFloat, randomInt, randomOneIn, clamp };
