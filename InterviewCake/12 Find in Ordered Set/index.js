function findInOrderedSet(set, item) {
  var lowerBound = 0;
  var upperBound = set.length - 1;
  var middle = Math.floor(upperBound / 2);

  while (lowerBound <= upperBound) {
    if (item > set[middle]) {
      lowerBound = middle + 1;
    } else if (item < set[middle]) {
      upperBound = middle - 1;
    } else {
      return true;
    }
    middle = lowerBound + Math.floor((upperBound - lowerBound) / 2);
  }

  return false;
}

module.exports = findInOrderedSet;
