import chroma from 'chroma-js';
import { TinyColor, mostReadable } from '@ctrl/tinycolor';


export class Color {
  chroma;
  tinycolor;

  computedTextColor;

  constructor(color = null) {
    if (color) {
      this.chroma = chroma(color);
      this.tinycolor = new TinyColor(color);
    }
  }

  toString(format = 'hex') {
    if (format === 'hsi') {
      return this.chroma
        .hsi()
        .map((n) => n.toFixed(3))
        .toString();
    } else if (format === 'lab') {
      return this.chroma
        .lab()
        .map((n) => n.toFixed(3))
        .toString();
    }

    return this.tinycolor.toString(format);
  }

  textColor() {
    if (!this.computedTextColor) {
      this.computedTextColor = mostReadable(this.toString('hex'), [
        '#ffffff',
        '#000000',
      ]).toHexString();
    }

    return this.computedTextColor;
  }

  hex() {
    return this.chroma.hex();
  }

  static fromChroma(color) {
    const c = new Color();
    c.chroma = color;
    c.tinycolor = new TinyColor(color.hex());
    return c;
  }

  static fromTinyColor(color) {
    const c = new Color();
    c.chroma = chroma(color.toHexString());
    c.tinycolor = color;
    return c;
  }

  static random(alpha = 1) {
    const c = chroma.random().alpha(alpha);
    return Color.fromChroma(c);
  }
}
