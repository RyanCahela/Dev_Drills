import GameManager from "./lib/GameManager";
import LogoScreen from "./screens/LogoScreen";
import TitleScreen from "./screens/TitleScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import KeyboardControls from "./lib/KeyboardControls";

const width = 640;
const height = 480;

const gameManager = new GameManager({ width, height });
const controls = new KeyboardControls();

function loadTitleScreen() {
  console.log("loadTitleScreen");
  gameManager.scene = new TitleScreen({
    dimentions: { width, height },
    controls,
    nextScreenFunction: loadGameScreen,
  });
}

function loadGameScreen() {
  gameManager.scene = new GameScreen({
    dimentions: { width, height },
    controls,
    nextScreenFunction: loadGameOverScreen,
  });
}

function loadGameOverScreen(results) {
  gameManager.scene = new GameOverScreen({
    dimentions: { width, height },
    controls,
    nextScreenFunction: loadTitleScreen,
    results,
  });
}

gameManager.scene = new LogoScreen({
  dimentions: { width, height },
  nextScreenFunction: loadTitleScreen,
});

gameManager.run();
