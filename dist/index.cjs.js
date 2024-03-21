'use strict';

var _defineProperty = require("@babel/runtime/helpers/defineProperty").default;
var ColorClass = require('color');
var contrastColor = require('contrast-color');
const Color = function (color) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#FF0000';
  try {
    return ColorClass(color);
  } catch {
    return ColorClass(fallback);
  }
};
class Contrast {
  constructor(bgcolor, fgcolor) {
    let size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;
    _defineProperty(this, "bgcolor", void 0);
    _defineProperty(this, "fgcolor", void 0);
    _defineProperty(this, "size", void 0);
    _defineProperty(this, "largeAA", 3);
    _defineProperty(this, "smallAA", 4.5);
    _defineProperty(this, "largeAAA", 4.5);
    _defineProperty(this, "smallAAA", 7);
    this.bgcolor = Color(bgcolor);
    this.fgcolor = Color(fgcolor);
    this.size = size;
  }
  get large() {
    return this.size >= 18;
  }
  get contrast() {
    return this.bgcolor.contrast(this.fgcolor);
  }
  get passAA() {
    const cutoff = this.large ? this.largeAA : this.smallAA;
    return this.contrast >= cutoff;
  }
  get passAAA() {
    const cutoff = this.large ? this.largeAAA : this.smallAAA;
    return this.contrast >= cutoff;
  }
}
const betterContrast = (bgcolor, colors) => {
  const bg = Color(bgcolor);
  const map = colors.map(color => ({
    color,
    contrast: bg.contrast(Color(color))
  }));
  return map.sort((a, b) => b.contrast - a.contrast)[0].color;
};
const maxdiff = Math.sqrt(Math.pow(101, 2) + Math.pow(257, 2) + Math.pow(257, 2));
const colorDiff = (cA, cB) => {
  const colorA = Color(cA).lab();
  const colorB = Color(cB).lab();
  const l = Math.pow(colorA.l() - colorB.l(), 2);
  const a = Math.pow(colorA.a() - colorB.a(), 2);
  const b = Math.pow(colorA.b() - colorB.b(), 2);
  return Math.sqrt(l + a + b) / maxdiff * 100;
};
const isDark = function (bgColor) {
  let threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 165;
  return contrastColor.contrastColor({
    bgColor,
    threshold
  }) === '#FFFFFF';
};
const isLight = function (bgColor) {
  let threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 165;
  return !isDark(bgColor, threshold);
};
exports.Color = Color;
exports.Contrast = Contrast;
exports.betterContrast = betterContrast;
exports.colorDiff = colorDiff;
exports.isDark = isDark;
exports.isLight = isLight;
