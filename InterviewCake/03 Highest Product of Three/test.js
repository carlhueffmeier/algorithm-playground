const getHighestProduct = require('./index.js');

test('getHighestProduct returns the correct result', () => {
  const arrayOfInts = [10, 1, 5, 3, 9, 7, 12];
  const result = getHighestProduct(arrayOfInts);
  expect(result).toEqual(12 * 10 * 9);
});

test('getHighestProduct works with negative numbers', () => {
  const arrayOfInts = [-10, -10, 1, 3, 2];
  const result = getHighestProduct(arrayOfInts);
  expect(result).toEqual(300);
});
