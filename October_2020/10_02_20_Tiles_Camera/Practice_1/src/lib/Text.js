class Text {
  constructor(config = {}) {
    const { text = "", styles = {}, spawnPosition = { x: 0, y: 0 } } = config;
    this.text = text;
    this.styles = styles;
    this.position = spawnPosition;
  }
}

export default Text;
