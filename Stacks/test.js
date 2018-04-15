const Stack = require('./index.js');

test('Stack class exists', () => {
  expect(typeof new Stack()).toEqual('object');
});

test('pop() returns the item last pushed', () => {
  const myStack = new Stack();
  const item = 'my item';

  myStack.push('another item');
  myStack.push(item);

  expect(myStack.pop()).toEqual(item);
});

test('pop() on empty stack returns undefined', () => {
  const myStack = new Stack();
  expect(myStack.pop()).toEqual(undefined);
});

test('size() returns correct size', () => {
  const myStack = new Stack();
  const size = 10;

  for (let i = 0; i < size; i++) {
    myStack.push('item');
  }

  expect(myStack.size()).toEqual(size);
});
