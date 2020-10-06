import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

class Game {
  constructor(config = {}) {
    const { width, height, parentElementIdentifier = "#board" } = config;
    this.scene = new Container();
    this.renderer = new CanvasRenderer({
      width,
      height,
    });
    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
    this.width = width;
    this.height = height;

    document
      .querySelector(parentElementIdentifier)
      .appendChild(this.renderer.view);
  }

  add(node) {
    return this.scene.add(node);
  }

  remove(node) {
    return this.scene.remove(node);
  }

  run(callback = () => {}) {
    const loop = (ms) => {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000; //convert ms to seconds
      this.deltaTime = currentTime - this.timeOfLastFrame;
      this.timeOfLastFrame = currentTime;

      this.scene.update(this.deltaTime, currentTime);
      callback(this.deltaTime, currentTime);
      this.renderer.render(this.scene);
    };
    requestAnimationFrame(loop);
  }
}

export default Game;
