class Texture {
  constructor(config = {}) {
    const { textureUrl = "./resources/place_holder.png" } = config;
    this.image = document.createElement("img");
    this.image.src = textureUrl;
  }
}

export default Texture;
