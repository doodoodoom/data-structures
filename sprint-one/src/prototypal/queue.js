var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {};

// Add a string to the back of the queue
queueMethods.enqueue = function(value) {
  this.storage[value] = value;
  this.count += 1;
  return this.storage;
};

//Remove string from beginning of queue
queueMethods.dequeue = function() {
  if (this.count === 0) {
    return 0;
  }
  var firstIdx = Object.keys(this.storage)[0];
  var itemToRemove = this.storage[firstIdx];
  delete this.storage[firstIdx];
  this.count -= 1;
  return itemToRemove;
};

queueMethods.size = function() {
  return this.count;
};


