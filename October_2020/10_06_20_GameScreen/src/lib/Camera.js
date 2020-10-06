import Container from "./Container";
import { clamp } from "../util/math";

class Camera extends Container {
  constructor(config = {}) {
    super();
    const { subject, viewport, worldSize = viewport } = config;

    console.log(viewport);

    this.viewport = viewport;
    this.worldSize = worldSize;
    this.offset = { x: 0, y: 0 };
    this.setSubject(subject);
  }

  setSubject(entity) {
    if (entity && entity.position) {
      //entity is a game entity
      this.subject = entity.position;
    } else if (entity) {
      //entity is a position element itself
      this.subject = entity;
    } else {
      //set subject to camera position and we can move it manually
      this.subject = this.position;
    }

    if (entity.offset) {
      this.offset.x += entity.offset.x;
      this.offset.y += entity.offset.y;
    }

    if (entity.anchor) {
      this.offset.x += entity.anchor.x;
      this.offset.y += entity.anchor.y;
    }
  }

  focus() {
    const centeredX = this.subject.x + this.offset.x - this.viewport.width / 2;
    const centeredY = this.subject.y + this.offset.y - this.viewport.height / 2;
    const maxX = this.worldSize.width - this.viewport.width;
    const maxY = this.worldSize.height - this.viewport.height;

    this.position.x = -clamp(centeredX, 0, maxX);
    this.position.y = -clamp(centeredY, 0, maxY);
  }

  update(deltaTime, currentTime) {
    super.update(deltaTime, currentTime);
    if (this.subject) {
      this.focus();
    }
  }
}

export default Camera;
