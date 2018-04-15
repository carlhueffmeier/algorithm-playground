const Queue = require('./index.js');

test('new Queue() returns an object', () => {
  const myQueue = new Queue();
  expect(typeof myQueue).toEqual('object');
});

test('count() returns number of elements in queue', () => {
  const myQueue = new Queue();
  const item = 'item';
  expect(myQueue.enqueue(item)).toEqual(1);
  expect(myQueue.enqueue(item)).toEqual(2);
});

test('enqueue() returns count of queue', () => {
  const myQueue = new Queue();
  const item = 'item';
  expect(myQueue.enqueue(item)).toEqual(1);
  expect(myQueue.enqueue(item)).toEqual(2);
});

test('dequeue() returns and removes oldest item', () => {
  const myQueue = new Queue();
  for (let i = 0; i < 10; i++) {
    myQueue.enqueue(`item-${i}`);
  }
  expect(myQueue.dequeue()).toEqual('item-0');
  expect(myQueue.dequeue()).toEqual('item-1');
});

test('dequeue() throws when queue is empty', () => {
  const myQueue = new Queue();
  expect(() => myQueue.dequeue()).toThrowError('Queue is empty');
});

test('peek() returns oldest item without removing it', () => {
  const myQueue = new Queue();
  for (let i = 0; i < 10; i++) {
    myQueue.enqueue(`item-${i}`);
  }
  expect(myQueue.peek()).toEqual('item-0');
  expect(myQueue.peek()).toEqual('item-0');
});

test('enqueue() throws an error when maximum size is reached', () => {
  const myQueue = new Queue(10);
  for (let i = 0; i < 10; i++) {
    myQueue.enqueue(`item-${i}`);
  }
  expect(() => myQueue.enqueue('urgh')).toThrowError('Maximum size exceeded');
});
