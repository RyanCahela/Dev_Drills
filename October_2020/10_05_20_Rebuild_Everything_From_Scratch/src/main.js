import Text from "./lib/Text";
import Game from "./lib/Game";
import Sprite from "./lib/Sprite";
import TileSprite from "./lib/TileSprite";

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

const sprite = new Sprite({
  textureUrl: "./resources/spaceship.png",
  spawnPosition: { x: 100, y: 100 },
});

const tileSprite = new TileSprite({
  textureUrl: "./resources/player-walk.png",
  spanwPosition: { x: 200, y: 200 },
  tileWidth: 32,
  tileHeight: 32,
  frame: { x: 0, y: 1 },
});

const myGame = new Game({
  width,
  height,
  parantElementIdentifier: "#board",
});

myGame.add(hello);
myGame.add(sprite);
myGame.add(tileSprite);
myGame.run();
