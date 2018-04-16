// Constraint: Do not use division in your solution.

function getProductsOfAllIntsExceptAtIndex(numbers) {
  var result = [];
  for (let i = 0, accumulator = 1; i < numbers.length; i++) {
    result[i] = accumulator;
    accumulator *= numbers[i];
  }
  for (let i = numbers.length - 1, accumulator = 1; i >= 0; i--) {
    result[i] *= accumulator;
    accumulator *= numbers[i];
  }
  return result;
}

module.exports = getProductsOfAllIntsExceptAtIndex;
