class Text {
  constructor(config = {}) {
    const {
      text,
      styles = {
        fill: "red",
        font: "30px sans-serif",
        align: "center",
      },
      spawnPosition = { x: 0, y: 0 },
    } = config;
    this.position = spawnPosition;
    this.text = text;
    this.styles = styles;
    console.log(this);
  }
}

export default Text;
