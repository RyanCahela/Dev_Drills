class Text {
  constructor(config = {}) {
    const { text = "", styles = {}, spawnPosition = { x: 0, y: 0 } } = config;
    this.position = spawnPosition;
    this.text = text;
    this.styles = styles;
  }
}

export default Text;
