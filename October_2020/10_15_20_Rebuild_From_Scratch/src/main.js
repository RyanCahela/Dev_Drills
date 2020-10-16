import Game from "./lib/Game";
import TitleScreen from "./screens/TitleScreen";
import KeyboardControls from "./lib/KeyboardControls";
import GameScreen from "./screens/GameScreen";

const myGame = new Game({
  width: 640,
  height: 480,
  parentContainerId: "board",
});

const controls = new KeyboardControls();

function loadGameScreen() {
  myGame.scene = new GameScreen({
    game: myGame,
    controls,
    nextScreenFunction: loadTitleScreen,
  });
}

function loadTitleScreen() {
  myGame.scene = new TitleScreen({
    game: myGame,
    controls,
    nextScreenFunction: loadGameScreen,
  });
}

loadTitleScreen();
myGame.run();
