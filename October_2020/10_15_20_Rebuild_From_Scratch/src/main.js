import Game from "./lib/Game";
import Text from "./lib/Text";

const myGame = new Game({
  width: 640,
  height: 480,
  parentContainerId: "board",
});

myGame.add(
  new Text({
    text: "Hello World",
    styles: {
      fill: "darkviolet",
      font: "20pt sans-serif",
      align: "center",
    },
    spawnPosition: {
      x: 320,
      y: 240,
    },
  })
);

myGame.run();
