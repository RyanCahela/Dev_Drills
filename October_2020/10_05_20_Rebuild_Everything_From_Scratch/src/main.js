import Text from "./lib/Text";
import Game from "./lib/Game";
import Level from "./entites/Level";
import KeyboardControls from "./lib/KeyboardControls";
import Squizz from "./entites/Squizz";

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

const level = new Level({
  width,
  height,
});

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

myGame.add(level);
myGame.add(squizz);
myGame.add(hello);
myGame.run();
