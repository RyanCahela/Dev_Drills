import Text from "./lib/Text";
import Game from "./lib/Game";
import Level from "./entites/Level";
import KeyboardControls from "./lib/KeyboardControls";
import Squizz from "./entites/Squizz";
import Camera from "./lib/Camera";

const width = 640;
const height = 480;

const hello = new Text({
  text: "Hello World!",
  styles: {
    fill: "red",
    font: "20pt monospace",
    align: "center",
  },
  spawnPosition: {
    x: width / 2,
    y: height / 2,
  },
});

const worldSize = {
  width: width * 2,
  height: height * 2,
};

const level = new Level(worldSize);

const myGame = new Game({
  width,
  height,
  parantElementIdentifier: "#board",
});

const squizz = new Squizz({
  spawnPosition: {
    x: 200,
    y: 200,
  },
  controls: new KeyboardControls(),
});

const camera = new Camera({
  subject: squizz,
  viewport: {
    width,
    height,
  },
  worldSize,
});

camera.add(level);
camera.add(squizz);
myGame.add(camera);
myGame.add(hello);
myGame.run(() => {
  level.checkGround(squizz.position);
});
