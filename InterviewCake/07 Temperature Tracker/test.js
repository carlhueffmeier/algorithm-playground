const TempTracker = require('./index.js');

/*
  insert()—records a new temperature
  getMax()—returns the highest temp we've seen so far
  getMin()—returns the lowest temp we've seen so far
  getMean()—returns the mean of all temps we've seen so far
  getMode()—returns a mode (any mode) of all temps we've seen so far
*/

test("insertion doesn't error", () => {
  var tracker = new TempTracker();
  expect(() => tracker.insert(50)).not.toThrow();
});

test('correctly retrieves the maximum', () => {
  var tracker = new TempTracker();
  tracker.insert(1, 3, 25, 8);
  expect(tracker.getMax()).toEqual(25);
});

test('correctly retrieves the minimum', () => {
  var tracker = new TempTracker();
  tracker.insert(1, 3, 25, 8);
  expect(tracker.getMin()).toEqual(1);
});

test('correctly retrieves the mean', () => {
  var tracker = new TempTracker();
  var temps = [4, 36, 45, 50, 75];
  tracker.insert(...temps);
  expect(tracker.getMean()).toEqual(42);
});

test('correctly retrieves the mode', () => {
  var tracker = new TempTracker();
  var temps = [4, 36, 45, 50, 7];
  tracker.insert(...temps);
  expect(tracker.getMode()).toBeUndefined();
  tracker.insert(45);
  expect(tracker.getMode()).toEqual(45);
  tracker.insert(4);
  tracker.insert(4);
  expect(tracker.getMode()).toEqual(4);
});
