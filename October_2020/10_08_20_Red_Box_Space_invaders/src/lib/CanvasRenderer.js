class CanvasRenderer {
  constructor(config = {}) {
    const { width, height } = config;
    const canvas = document.createElement("canvas");
    this.width = canvas.width = width;
    this.height = canvas.height = height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
  }

  render(container, clear = true) {
    const { ctx } = this;

    const renderRecursive = (container) => {
      container.nodes.forEach((node) => {
        if (node.isHidden) return;

        if (clear) ctx.clearRect(0, 0, this.width, this.height);

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
          const { x, y } = node.pivot;
          const pivotX = x ? x : 0;
          const pivotY = y ? y : 0;
          ctx.translate(pivotX, pivotY);
          ctx.rotate(node.rotation);
          ctx.translate(-pivotX, -pivotY);
        }

        //draw leaf nodes
        if (node.text) {
          const { fill, font, align } = node.styles;
          if (fill) ctx.fillStyle = fill;
          if (font) ctx.font = font;
          if (align) ctx.textAlign = align;
          ctx.fillText(node.text, 0, 0);
        }

        if (node.texture && node.tileWidth && node.tileHeight && node.frame) {
          const { tileWidth, tileHeight, frame, texture } = node;
          ctx.drawImage(
            texture.image,
            frame.x * tileWidth,
            frame.y * tileHeight,
            tileWidth,
            tileHeight,
            0,
            0,
            tileWidth,
            tileHeight
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
