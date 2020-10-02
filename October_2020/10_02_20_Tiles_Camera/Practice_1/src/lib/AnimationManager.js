import Animation from "./Animation";

class AnimationManager {
  constructor() {
    this.animationsCache = {};
    this.currentAnimation = null;
    this.currentFrame = null;
  }

  add(animationConfig = {}) {
    const { name, frames, rate } = animationConfig;
    if (this.animationsCache[name]) {
      throw Error("There is already an animation with that name.");
    }
    this.animationsCache[name] = new Animation({ frames, rate });
    this.animationsCache[name].reset();
  }

  play(name) {
    if (!this.animationsCache[name]) {
      throw Error(`No animation with name ${name}`);
    }
    if (this.animationsCache[name] === this.currentAnimation) return;
    this.currentAnimation = this.animationsCache[name];
  }

  update(deltaTime, currentTime) {
    if (!this.currentAnimation) return;
    this.currentAnimation.update(deltaTime, currentTime);
    this.currentFrame = this.currentAnimation.currentFrame;
  }
}

export default AnimationManager;
