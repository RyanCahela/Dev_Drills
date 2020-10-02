class Animation {
  constructor(config = {}) {
    const { frames, rate } = config;
    this.frames = frames;
    this.rate = rate;
    this.currentAnimationTime = 0;
    this.currentFrameIndex = 0;
    this.currentFrame = this.frames[this.currentFrameIndex];
  }

  reset() {
    this.currentAnimationTime = 0;
    this.currentFrameIndex = 0;
    this.currentFrame = this.frames[this.currentFrameIndex];
  }

  update(deltaTime, currentTime) {
    if (deltaTime < this.rate) {
      this.currentAnimationTime += deltaTime;
    }

    if (this.currentAnimationTime > this.rate) {
      const { frames } = this;
      this.currentFrameIndex++;
      this.currentFrame = frames[this.currentFrameIndex % frames.length];
      this.currentAnimationTime -= this.rate;
    }
  }
}

export default Animation;
