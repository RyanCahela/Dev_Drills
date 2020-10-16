class Sprite {
  constructor(config = {}) {
    const {
      textureUrl = "./resources/place-holder.png",
      spawnPosition = { x: 0, y: 0 },
    } = config;
    this.image = document.createElement("img");
    this.image.src = textureUrl;
    this.position = spawnPosition;
  }
}

export default Sprite;
