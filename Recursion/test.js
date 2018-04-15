const {
  fibonacci,
  flatten,
  gcd,
  paintFill,
  rReverse,
  permutator
} = require('./index.js');

test('fibonacci returns correct values', () => {
  expect(fibonacci(0)).toEqual(0);
  expect(fibonacci(1)).toEqual(1);
  expect(fibonacci(10)).toEqual(55);
  expect(fibonacci(50)).toEqual(12586269025);
});

test('flatten returns correct values', () => {
  expect(flatten([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
});

test('gcd returns correct values', () => {
  expect(gcd(3528, 3780)).toEqual(252);
  expect(gcd(25, 15)).toEqual(5);
  expect(gcd(36, 6)).toEqual(6);
});

test('paintFill fills the screen correctly', () => {
  const b = 'b';
  const g = 'g';
  const w = 'w';
  const originalScreen = [
    [w, w, b, w, w],
    [w, b, w, b, w],
    [w, b, b, b, w],
    [w, b, w, b, w],
    [w, w, b, w, w]
  ];
  const expectedScreen = [
    [w, w, b, w, w],
    [w, g, w, g, w],
    [w, g, g, g, w],
    [w, g, w, g, w],
    [w, w, b, w, w]
  ];
  const point = [2, 2];
  expect(paintFill(originalScreen, point, g)).toEqual(expectedScreen);
});

test('rReverse produces correct output', () => {
  testStrings = ['hello', 'more tests', 'even more and longer tests'];
  testStrings.forEach(str => {
    expect(rReverse(str)).toEqual(
      str
        .split('')
        .reverse()
        .join('')
    );
  });
});

test('permutator creates all permutations correctly', () => {
  const sourceArray = [1, 2, 3, 4, 5];
  const factorial = x => (x === 1 ? 1 : x * factorial(x - 1));
  const permutations = permutator(sourceArray);
  expect(permutations).toHaveLength(factorial(sourceArray.length));
  permutations.forEach(p => {
    expect(p).toHaveLength(sourceArray.length);
    expect(p).toEqual(expect.arrayContaining(sourceArray));
  });
});
