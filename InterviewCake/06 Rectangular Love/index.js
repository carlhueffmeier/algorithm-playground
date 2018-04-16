function makeLoveRectangle(a, b) {
  var leftX = Math.max(a.leftX, b.leftX);
  var bottomY = Math.max(a.bottomY, b.bottomY);
  var rightX = Math.min(a.leftX + a.width, b.leftX + b.width);
  var topY = Math.min(a.bottomY + a.height, b.bottomY + b.height);
  var width = rightX - leftX;
  var height = topY - bottomY;

  if (width <= 0 || height <= 0) {
    throw new Error('No love detected');
  }

  return {
    leftX,
    bottomY,
    width,
    height
  };
}

module.exports = makeLoveRectangle;
