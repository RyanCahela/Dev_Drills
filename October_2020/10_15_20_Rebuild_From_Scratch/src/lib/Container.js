class Container {
  constructor() {
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
    this.nodes = this.nodes.map((node) => {
      callback(node);
      return node;
    });
  }

  update(deltaTime, currentTime) {
    this.nodes = this.nodes.filter((node) => {
      if (node.update) {
        node.update(deltaTime, currentTime);
      }

      return node.isDead ? false : true;
    });
  }
}

export default Container;
