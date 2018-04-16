const makeLoveRectangle = require('./index.js');

test('intersection with itself returns the same object', () => {
  var rectangleA = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,
    // width and height
    width: 6,
    height: 3
  };
  var result = makeLoveRectangle(rectangleA, rectangleA);
  expect(result).toEqual(rectangleA);
});

test('works for simple problem', () => {
  var rectangleA = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 3
  };
  var rectangleB = {
    leftX: 5,
    bottomY: 2,
    width: 3,
    height: 6
  };
  var solution = {
    leftX: 5,
    bottomY: 2,
    width: 2,
    height: 2
  };
  var result = makeLoveRectangle(rectangleA, rectangleB);
  expect(result).toEqual(solution);
});

test('handles no intersections', () => {
  var rectangleA = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 3
  };
  var rectangleB = {
    leftX: 12,
    bottomY: 2,
    width: 3,
    height: 6
  };
  expect(() => makeLoveRectangle(rectangleA, rectangleB)).toThrow();
});

test('handles rectangle a is contained in b', () => {
  var rectangleA = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 6
  };
  var rectangleB = {
    leftX: 3,
    bottomY: 3,
    width: 2,
    height: 2
  };
  var result = makeLoveRectangle(rectangleA, rectangleB);
  expect(result).toEqual(rectangleB);
});

test('handles touching rectangles reasonably', () => {
  var rectangleA = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 6
  };
  var rectangleB = {
    leftX: 7,
    bottomY: 1,
    width: 2,
    height: 6
  };
  expect(() => makeLoveRectangle(rectangleA, rectangleB)).toThrow();
});
