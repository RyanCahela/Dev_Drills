import Level from "./entities/Level";
import Game from "./lib/Game";
import Text from "./lib/Text";
import { clamp } from "./util/math";
import Squizz from "./entities/Squizz";
import KeyboardControls from "./lib/KeyboardControls";
import Camera from "./lib/Camera";
import Container from "./lib/Container";
import Enemy from "./entities/Enemy";

const WIDTH = 640;
const HEIGHT = 480;
const worldSize = {
  width: WIDTH * 2,
  height: HEIGHT * 2,
};

const myGame = new Game({
  width: WIDTH,
  height: HEIGHT,
  parentElementIdentifier: "#board",
});

const text = new Text({
  text: "Hello World",
  styles: {
    fill: "red",
    font: "20pt monospace",
    align: "center",
  },
  spawnPosition: {
    x: 640 / 2,
    y: 480 / 2,
  },
});

const level = new Level(worldSize);

const squizz = new Squizz({
  controls: new KeyboardControls(),
  spawnPosition: { x: 100, y: 100 },
});

const camera = new Camera({
  subject: squizz,
  viewport: {
    width: WIDTH,
    height: HEIGHT,
  },
  worldSize,
});

const addEnemies = (level) => {
  const enemies = new Container();
  for (let i = 0; i < 5; i++) {
    enemies.add(
      new Enemy({
        xSpeed: 5 * 32,
        ySpeed: 0,
        spawnPosition: {
          x: 0,
          y: Math.floor(level.height / 5) * i + level.tileHeight * 2,
        },
      })
    );
  }

  return enemies;
};

const baddies = addEnemies(level);
camera.add(level);
camera.add(baddies);
camera.add(squizz);
myGame.add(camera);
myGame.add(text);

myGame.run((deltaTime, currentTime) => {
  const {
    bounds: { top, bottom, left, right },
  } = level;
  squizz.position.x = clamp(squizz.position.x, left, right);
  squizz.position.y = clamp(squizz.position.y, top, bottom);

  console.log(level.checkGround(squizz.position));
});
