import Game from "./lib/Game";
import { distance, centerPosition } from "./util/entity";
import GameScreen from "./screens/GameScreen";
import KeyboardControls from "./lib/KeyboardControls";
import TitleScreen from "./screens/TitleScreen";
import LogoScreen from "./screens/LogoScreen";
import GameOverScreen from "./screens/GameOverScreen";

const width = 640;
const height = 480;

const myGame = new Game({
  width,
  height,
  parantElementIdentifier: "#board",
});

const controls = new KeyboardControls();

function titleScreen() {
  myGame.scene = new TitleScreen({
    game: myGame,
    controls,
    transitionFunction: newGame,
  });
}

function newGame() {
  myGame.scene = new GameScreen({
    game: myGame,
    controls,
    transitionFunction: gameOverScreen,
  });
}

function gameOverScreen(result) {
  myGame.scene = new GameOverScreen({
    game: myGame,
    controls,
    result,
    transitionFunction: titleScreen,
  });
}

myGame.scene = new LogoScreen({
  game: myGame,
  transitionFunction: titleScreen,
});

myGame.run();
