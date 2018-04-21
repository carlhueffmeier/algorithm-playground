const findRotationPoint = require('./index.js');

test('Correctly finds rotation point', () => {
  const words = [
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde'
  ];

  expect(findRotationPoint(words)).toEqual(words.indexOf('asymptote'));
});
