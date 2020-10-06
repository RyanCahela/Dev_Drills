import Texture from "./Texture";

class Sprite {
  constructor(config = {}) {
    const { spawnPosition = { x: 0, y: 0 }, textureUrl } = config;
    this.position = spawnPosition;
    this.texture = new Texture({ textureUrl });
  }
}

export default Sprite;
