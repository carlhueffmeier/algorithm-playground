function getHighestProduct(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('Need at least 3 integers');
  }

  var smallA = arrayOfInts[0],
    smallB = arrayOfInts[1];
  var largeA = arrayOfInts[0],
    largeB = arrayOfInts[1];
  var highestProduct = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    highestProduct = Math.max(
      highestProduct,
      smallA * smallB * arrayOfInts[i],
      largeA * largeB * arrayOfInts[i]
    );
    if (arrayOfInts[i] > largeA || arrayOfInts[i] > largeB) {
      largeB = Math.max(largeA, largeB);
      largeA = arrayOfInts[i];
    } else if (arrayOfInts[i] < smallA || arrayOfInts[i] < smallB) {
      smallB = Math.min(smallA, smallB);
      smallA = arrayOfInts[i];
    }
  }

  return highestProduct;
}

module.exports = getHighestProduct;
