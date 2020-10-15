class CanvasRenderer {
  constructor(config = {}) {
    const { width, height } = config;
    const canvas = document.createElement("canvas");
    this.width = canvas.width = width;
    this.height = canvas.height = height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
  }

  render(container, clear = true) {
    const { ctx, width, height } = this;

    if (clear) ctx.clearRect(0, 0, width, height);

    const renderRecursive = (container) => {
      container.nodes.forEach((node) => {
        ctx.save();

        if (node.position) {
          ctx.translate(
            Math.round(node.position.x),
            Math.round(node.position.y)
          );
        }

        if (node.anchor) {
          ctx.translate(node.anchor.x, node.anchor.y);
        }

        if (node.scale) {
          ctx.scale(node.scale.x, node.scale.y);
        }

        if (node.rotation) {
          const pivotX = node.pivot.x ? node.pivot.x : 0;
          const pivotY = node.pivot.y ? node.pivot.y : 0;
          ctx.translate(pivotX, pivotY);
          ctx.rotate(node.rotation);
          ctx.translate(-pivotX, -pivotY);
        }

        if (node.text) {
          const { fill, font, align } = node.styles;
          if (fill) ctx.fillStyle = fill;
          if (font) ctx.font = font;
          if (align) ctx.textAlign = align;
          ctx.fillText(node.text, 0, 0);
        }

        if (node.texture && node.tileWidth && node.tileHeight && node.frame) {
          ctx.drawImage(
            node.texture.image,
            node.tileWidth * node.frame.x,
            node.tileHeight * node.frame.y,
            node.tileWidth,
            node.tileHeight,
            0,
            0,
            node.tileWidth,
            node.tileHeight
          );
        } else if (node.texture) {
          ctx.drawImage(node.texture.image, 0, 0);
        }

        if (node.nodes) {
          renderRecursive(node);
        }

        ctx.restore();
      });
    };

    renderRecursive(container);
  }
}

export default CanvasRenderer;
