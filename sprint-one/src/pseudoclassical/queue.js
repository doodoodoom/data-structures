var Queue = function() {
  this.storage = {};
  this.count = 0;  
};

// Add string to end of queue
Queue.prototype.enqueue = function(value) {
  this.storage[value] = value;
  this.count += 1;
  return this.storage;
};

// Removes string at beginning of queue
Queue.prototype.dequeue = function() {
  if (this.count === 0) {
    return 0;
  }
  var firstIdx = Object.keys(this.storage)[0];
  var itemToRemove = this.storage[firstIdx];
  delete this.storage[firstIdx];
  this.count -= 1;
  return itemToRemove;
};

Queue.prototype.size = function() {
  return this.count;
};


