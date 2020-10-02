import { clamp } from "../util/math";
import Container from "./Container";

class Camera extends Container {
  constructor(config = {}) {
    const { subject, viewport, worldSize = viewport } = config;
    super();

    this.width = viewport.width;
    this.height = viewport.height;
    this.worldSize = worldSize;
    this.viewport = viewport;
    this.setSubject(subject);
  }

  setSubject(entity) {
    if (entity.position) {
      //if an actual game entity is passed in.
      this.subject = entity.position;
    } else if (entity) {
      //if just a position object is passed in.
      this.subject = entity;
    } else if (!entity) {
      //if nothing passed in camera just focuses on it's own position
      this.subject = this.position;
    }

    this.offset = { x: 0, y: 0 };

    //center on entity
    if (entity && entity.width) {
      this.offset.x += entity.width / 2;
      this.offset.y += entity.height / 2;
    }
    if (entity && entity.anchor) {
      this.offset.x += entity.anchor.x;
      this.offset.y += entity.anchor.y;
    }
  }

  focus() {
    const centeredX = this.subject.x + this.offset.x - this.width / 2;
    const centeredY = this.subject.y + this.offset.y - this.height / 2;
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
