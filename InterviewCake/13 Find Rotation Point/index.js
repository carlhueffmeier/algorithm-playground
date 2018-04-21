function findRotationPoint(words) {
  var lowerBound = 0;
  var upperBound = words.length - 1;

  while (lowerBound < upperBound) {
    let middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);

    if (words[middle] >= words[0]) {
      lowerBound = middle;
    } else {
      upperBound = middle;
    }

    if (lowerBound + 1 === upperBound) break;
  }

  return upperBound;
}

module.exports = findRotationPoint;
