function fibonacci(n) {
  const memory = [0, 1];

  const fib = function fib(n) {
    if (memory[n] !== undefined) {
      return memory[n];
    }

    return (memory[n] = fib(n - 1) + fib(n - 2));
  };

  return fib(n);
}

function flatten(arr) {
  let flat = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      flat = [...flat, ...flatten(item)];
    } else {
      flat = [...flat, item];
    }
  });

  return flat;
}

function gcd(a, b) {
  const [larger, smaller] = [a, b].sort((a, b) => b - a);
  const remainder = larger % smaller;
  const factor = Math.floor(larger / smaller);

  if (remainder === 0) {
    return smaller;
  }
  return gcd(smaller, remainder);
}

/*
Implement a function that takes in a two-dimensional array 
of colors that represents a screen, a point in the array, 
and a color. The function will change the original color of 
the point to the new color and will fill the surrounding area 
with the original color in the same fashion.
*/
function paintFill(screen, point, color) {
  let newScreen = screen.map(row => row.slice());
  const [px, py] = point;
  const originalColor = newScreen[px][py];

  newScreen[px][py] = color;
  const width = screen.length,
    height = screen[0].length;

  const isInBounds = p => p[0] > 0 && p[0] < width && p[1] > 0 && p[1] < height;

  const fillPoint = p => {
    if (isInBounds(p) && newScreen[p[0]][p[1]] === originalColor) {
      newScreen = paintFill(newScreen, p, color);
    }
  };

  [[px - 1, py], [px + 1, py], [px, py - 1], [px, py + 1]].forEach(p =>
    fillPoint(p)
  );

  return newScreen;
}

function rReverse(str) {
  if (str.length === 1) {
    return str;
  }
  return rReverse(str.slice(1)) + str[0];
}

function permutator(source) {
  let permutations = [];

  const permute = (arr, fixed = []) => {
    if (arr.length === 0) {
      permutations.push(fixed);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr.slice();
      let pick = newArr.splice(i, 1);
      permute(newArr, [...fixed, ...pick]);
    }
  };

  permute(source);
  return permutations;
}

module.exports = {
  fibonacci,
  flatten,
  gcd,
  paintFill,
  rReverse,
  permutator
};
