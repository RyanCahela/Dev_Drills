import Texture from "./Texture";

class Sprite {
  constructor(config = {}) {
    const { textureUrl, spawnPosition = { x: 0, y: 0 } } = config;
    this.texture = new Texture({ textureUrl });
    this.position = spawnPosition;
  }
}

export default Sprite;
