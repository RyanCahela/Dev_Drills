import Text from "./lib/Text";
import Game from "./lib/Game";

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

const myGame = new Game({
  width,
  height,
  parantElementIdentifier: "#board",
});

myGame.add(hello);
myGame.run();
