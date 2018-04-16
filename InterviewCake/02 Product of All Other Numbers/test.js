const getProductsOfAllIntsExceptAtIndex = require('./index.js');

test('getProductsOfAllIntsExceptAtIndex returns correct result', () => {
  const input = [1, 7, 3, 4];
  const result = getProductsOfAllIntsExceptAtIndex(input);

  expect(result).toEqual([84, 12, 28, 21]);
});

test('getProductsOfAllIntsExceptAtIndex works if array contains zeroes', () => {
  const input = [1, 7, 3, 4, 0];
  const result = getProductsOfAllIntsExceptAtIndex(input);

  expect(result).toEqual([0, 0, 0, 0, 84]);
});
