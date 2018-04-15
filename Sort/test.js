const {
  bubbleSort,
  insertionSort,
  insertionSwap,
  insertionSwapSort,
  mergeSort
} = require('./index.js');

test('bubbleSort works', () => {
  var source = Array.from({ length: 1000 }, () =>
    Math.round(Math.random() * 1000)
  );
  var result = source.slice();
  bubbleSort(result);
  source.sort((a, b) => a - b);
  expect(result).toEqual(source);
});

test('insertionSort works', () => {
  var source = Array.from({ length: 1000 }, () =>
    Math.round(Math.random() * 1000)
  );
  var result = insertionSort(source);
  source.sort((a, b) => a - b);
  expect(result).toEqual(source);
});

test('insertionSwapSort works', () => {
  var source = Array.from({ length: 1000 }, () =>
    Math.round(Math.random() * 1000)
  );
  var result = source.slice();
  insertionSwapSort(result);
  source.sort((a, b) => a - b);
  expect(result).toEqual(source);
});

test('insertionSort works', () => {
  var source = Array.from({ length: 10 }, () =>
    Math.round(Math.random() * 1000)
  );
  var result = mergeSort(source);
  source.sort((a, b) => a - b);
  expect(result).toEqual(source);
});
