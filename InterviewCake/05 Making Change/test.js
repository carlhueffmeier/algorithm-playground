const makeChange = require('./index.js');

test('makeChange works for a small problem set', () => {
  expect(makeChange(4, [1, 2, 3])).toEqual(4);
  expect(makeChange(4, [1, 2, 3, 4])).toEqual(5);
});

test('makeChange handles the case when there is no possible way to give change', () => {
  expect(makeChange(5, [4, 3])).toEqual(0);
});
