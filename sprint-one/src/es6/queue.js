class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  //Add string to end of the queue
  enqueue(value) {
    this.storage[value] = value;
    this.count += 1;
    return this.storage;
  }

  // Remove string from beginning of queue  
  dequeue() {
    if (this.count === 0) {
      return 0;
    }
    var firstIdx = Object.keys(this.storage)[0];
    var itemToRemove = this.storage[firstIdx];
    delete this.storage[firstIdx];
    this.count -= 1;
    return itemToRemove;
  }
  size() {
    return this.count;
  }
}
