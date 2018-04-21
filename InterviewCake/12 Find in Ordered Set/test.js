const findInOrderedSet = require('./index.js');

test('correctly determines whether number is in array', () => {
  const setA = [1, 3, 5, 8, 23, 42, 84, 104, 333, 503];
  const setB = [1, 3, 5, 8, 23, 42, 84, 104, 333, 503, 808];

  setA.forEach(item => {
    expect(findInOrderedSet(setA, item)).toBeTruthy();
    expect(findInOrderedSet(setA, item + 1)).toBeFalsy();
  });

  setB.forEach(item => {
    expect(findInOrderedSet(setB, item)).toBeTruthy();
    expect(findInOrderedSet(setB, item + 1)).toBeFalsy();
  });
});
