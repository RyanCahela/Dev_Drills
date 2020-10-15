import CanvaRenderer from "./CanvasRenderer";
import Container from "./Container";

class Game {
  constructor(config = {}) {
    const { width, height, parentContainerId } = config;
    this.scene = new Container();
    this.renderer = new CanvaRenderer({ width, height });
    document.getElementById(parentContainerId).appendChild(this.renderer.view);

    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
  }

  add(node) {
    return this.scene.add(node);
  }

  remove(node) {
    return this.scene.remove(node);
  }

  map(callback) {
    this.scene.map(callback);
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
