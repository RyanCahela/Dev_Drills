import TileSprite from "../lib/TileSprite";
import AnimationManager from "../lib/AnimationManager";

class Squizz extends TileSprite {
  constructor(config = {}) {
    const { controls, spawnPosition } = config;
    super({
      textureUrl: "./resources/player-walk.png",
      tileWidth: 32,
      tileHeight: 32,
      spawnPosition,
    });

    this.gridDirection = { x: 0, y: 1 };
    this.controls = controls;
    this.speed = 32 / 0.5; //one tile every 0.5 seconds
    this.animationManager = new AnimationManager();
    this.animationManager.add({
      name: "walk",
      rate: 0.5,
      frames: [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ],
    });
    this.animationManager.play("walk");
  }

  update(deltaTime, currentTime) {
    const {
      controls,
      speed,
      gridDirection,
      position,
      tileWidth,
      tileHeight,
    } = this;

    //handle animation
    this.animationManager.update(deltaTime, currentTime);
    this.frame = this.animationManager.currentFrame;

    //handle movement
    if (controls.x && controls.x !== gridDirection.x) {
      gridDirection.x = controls.x;
      gridDirection.y = 0;
      this.position.y = Math.round(position.y / tileHeight) * tileHeight;
    } else if (controls.y && controls.y !== gridDirection.y) {
      gridDirection.y = controls.y;
      gridDirection.x = 0;
      this.position.x = Math.round(position.x / tileWidth) * tileWidth;
    }

    this.position.x += this.gridDirection.x * speed * deltaTime;
    this.position.y += this.gridDirection.y * speed * deltaTime;
  }
}

export default Squizz;
