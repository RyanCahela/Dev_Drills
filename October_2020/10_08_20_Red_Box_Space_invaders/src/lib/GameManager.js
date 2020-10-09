import Container from "./Container";
import CanvasRenderer from "./CanvasRenderer";

class GameManager {
  constructor(config = {}) {
    const { width, height, parentElementIdentifier = "#board" } = config;
    const renderer = new CanvasRenderer({ width, height });
    const scene = new Container();

    document.querySelector(parentElementIdentifier).appendChild(renderer.view);

    this.width = width;
    this.height = height;
    this.scene = scene;
    this.renderer = renderer;
    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
  }

  map(callback) {
    this.scene.map(callback);
  }

  run() {
    const loop = (ms) => {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000; //convert to seconds
      this.deltaTime = currentTime - this.timeOfLastFrame;
      this.timeOfLastFrame = currentTime;

      this.scene.update(this.deltaTime, currentTime);
      this.renderer.render(this.scene);
    };
    requestAnimationFrame(loop);
  }
}

export default GameManager;
