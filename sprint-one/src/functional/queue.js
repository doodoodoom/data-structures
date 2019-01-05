var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;

  // Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    storage[value] = value;
    count += 1;
    return storage;
  };

  //Remove and return the string at the front of the queue
  // {0: "hi", 1: "42", 2: "true", 3: "false"}
  // turn key obj into arrays
  // --> [0, 1, 2, 3] --> get first value of 0th index
  // then use it as property to remove from obj
  someInstance.dequeue = function() {
    if (count === 0) {
      return 0;
    }
    var idxToRemove = Object.keys(storage)[0];
    var itemToRemove = storage[idxToRemove];
    delete storage[idxToRemove];
    count -= 1;
    return itemToRemove;
  };

  //Return the number of items in the queue
  someInstance.size = function() {
    return count - first;
  };
  return someInstance;
};