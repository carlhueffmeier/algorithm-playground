function swap(a, b) {
  [a, b] = [b, a];
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

function insertionSort(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (j < result.length && result[j] < arr[i]) {
      j++;
    }
    result.splice(j, 0, arr[i]);
  }
  return result;
}

function insertionSwapSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
}

function mergeSort(arr) {
  debugger;
  // base case
  if (arr.length <= 1) return arr;
  // if arr has more than one element
  // split it in two halfs
  {
    let half = Math.round(arr.length / 2); // 2 => 1, 3 => 1.5
    var left = mergeSort(arr.slice(0, half));
    var right = mergeSort(arr.slice(half));
  }
  // merge them
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

module.exports = {
  bubbleSort,
  insertionSort,
  insertionSwapSort,
  mergeSort
};
