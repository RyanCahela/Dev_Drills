class Text {
  constructor(config = {}) {
    const {
      text = "placeholder_text",
      styles = { fill: "blue", font: "20pt monospace", align: "center" },
      spawnPosition = { x: 0, y: 0 },
    } = config;
    this.position = spawnPosition;
    this.text = text;
    this.styles = styles;
  }
}

export default Text;
