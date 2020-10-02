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
    const { ctx, width, height } = this;
    if (clear) ctx.clearRect(0, 0, width, height);

    const renderRecursive = (container) => {
      container.nodes.forEach((node) => {
        ctx.save();

        const {
          position,
          anchor,
          scale,
          rotation,
          pivot,
          text,
          tileWidth,
          tileHeight,
          frame,
          texture,
        } = node;

        if (position) {
          ctx.translate(Math.round(position.x), Math.round(position.y));
        }

        if (anchor) {
          ctx.translate(anchor.x, anchor.y);
        }

        if (scale) {
          ctx.scale(scale.x, scale.y);
        }

        if (rotation) {
          const pivotX = pivot.x ? pivot.x : 0;
          const pivotY = pivot.y ? pivot.y : 0;
          ctx.translate(pivotX, pivotY);
          ctx.rotate(rotation);
          ctx.translate(-pivotX, -pivotY);
        }

        //draw leaf nodes
        if (text) {
          const { fill, font, align } = node.styles;
          if (fill) ctx.fillStyle = fill;
          if (font) ctx.font = font;
          if (align) ctx.textAlign = align;
          ctx.fillText(text, 0, 0);
        }

        if (tileWidth && tileHeight && frame && texture) {
          ctx.drawImage(
            texture.image,
            tileWidth * frame.x,
            tileHeight * frame.y,
            tileWidth,
            tileHeight,
            0,
            0,
            tileWidth,
            tileHeight
          );
        } else if (texture) {
          ctx.drawImage(texture.image, 0, 0);
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
