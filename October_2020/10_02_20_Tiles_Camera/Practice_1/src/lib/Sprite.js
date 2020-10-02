import Texture from "./Texture";

class Sprite {
  constructor(config = {}) {
    const {
      textureUrl = "./resources/place_holder.png",
      spawnPosition = { x: 0, y: 0 },
      scale = { x: 1, y: 1 },
      rotation = 0,
      pivot = { x: 0, y: 0 },
      anchor = { x: 0, y: 0 },
    } = config;
    this.texture = new Texture({ textureUrl });
    this.position = spawnPosition;
    this.scale = scale;
    this.anchor = anchor;
    this.rotation = rotation;
    this.pivot = pivot;
  }
}

export default Sprite;
