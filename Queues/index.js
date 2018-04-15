class Queue {
  constructor(capacity) {
    this.capacity = capacity || Number.MAX_SAFE_INTEGER;
    this.storage = {};
    this.beginning = 0;
    this.end = 0;
  }

  count() {
    return this.end - this.beginning;
  }

  enqueue(item) {
    if (this.count() >= this.capacity) {
      throw new Error('Maximum size exceeded');
    }

    this.storage[this.end++] = item;
    return this.count();
  }

  dequeue() {
    if (this.count() === 0) {
      throw new Error('Queue is empty');
    }

    let item = this.storage[this.beginning];
    delete this.storage[this.beginning];
    this.beginning++;
    return item;
  }

  peek() {
    return this.storage[this.beginning];
  }
}

module.exports = Queue;
