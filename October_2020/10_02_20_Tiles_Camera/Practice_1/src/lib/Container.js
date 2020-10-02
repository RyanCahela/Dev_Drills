class Container {
  constructor(config = {}) {
    this.position = { x: 0, y: 0 };
    this.nodes = [];
  }

  add(node) {
    this.nodes.push(node);
    return node;
  }

  remove(node) {
    this.nodes = this.nodes.filter((n) => n !== node);
    return node;
  }

  map(callback) {
    this.nodes = this.nodes.map(callback);
  }

  update(deltaTime, currentTime) {
    this.nodes.forEach((node) => {
      if (node.update) {
        node.update(deltaTime, currentTime);
      }
    });
  }
}

export default Container;
