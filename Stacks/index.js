class Stack {
  constructor() {
    this.storage = '';
    this.delimiter = '-*-';
  }

  size() {
    if (this.storage.length === 0) {
      return 0;
    }
    return this.storage.split(this.delimiter).length - 1;
  }

  push(item) {
    this.storage += `${this.delimiter}${item}`;
  }

  pop() {
    if (this.size() === 0) {
      return undefined;
    }

    let index = this.storage.lastIndexOf(this.delimiter);
    let item = this.storage.slice(index + this.delimiter.length);
    this.storage = this.storage.slice(0, index);
    return item;
  }
}

module.exports = Stack;
