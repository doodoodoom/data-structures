var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};

// Add a string to the back of the queue
queueMethods.enqueue = function(value) {
  this.storage[value] = value;
  this.count += 1;
  return this.storage;
};

//Remove and return the string at the front of the queue
// {0: "hi", 1: "42", 2: "true", 3: "false"}
// turn key obj into arrays
// --> [0, 1, 2, 3] --> get first value of 0th index
// then use it as property to remove from obj
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


