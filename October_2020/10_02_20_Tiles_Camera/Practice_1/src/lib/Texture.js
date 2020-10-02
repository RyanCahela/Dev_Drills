class Texture {
  constructor(config = {}) {
    const { textureUrl } = config;
    this.image = document.createElement("img");
    this.image.src = textureUrl;
  }
}

export default Texture;
