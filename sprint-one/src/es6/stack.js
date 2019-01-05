class Stack {

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count += 1;
    return this.storage;
  };

  pop() {
    if (this.count === 0) {
      return 0;
    }
    var lastIdx = this.count - 1;
    var idxToRemove = this.storage[lastIdx];
    delete this.storage[lastIdx];
    this.count -= 1;
    return idxToRemove;
  };

  size() {
    return this.count;
  };
}
var s = new Stack();