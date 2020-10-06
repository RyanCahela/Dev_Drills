import Game from "./lib/Game";
import { distance, centerPosition } from "./util/entity";
import GameScreen from "./screens/GameScreen";
import KeyboardControls from "./lib/KeyboardControls";

const width = 640;
const height = 480;

const myGame = new Game({
  width,
  height,
  parantElementIdentifier: "#board",
});

myGame.scene = new GameScreen({
  game: myGame,
  controls: new KeyboardControls(),
});
myGame.run();
