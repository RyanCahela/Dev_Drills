import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

class Game {
  constructor(config = {}) {
    const { width, height, parentElementIdentifier } = config;
    const scene = new Container();
    const renderer = new CanvasRenderer({ width, height });
    document.querySelector(parentElementIdentifier).appendChild(renderer.view);

    this.scene = scene;
    this.renderer = renderer;
    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
  }

  add(node) {
    return this.scene.add(node);
  }

  run(callback = () => {}) {
    const loop = (ms) => {
      requestAnimationFrame(loop);

      const currentTime = ms / 1000;
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
