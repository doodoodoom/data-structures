var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  someInstance.count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.count] = value;
    someInstance.count += 1;
    return someInstance.storage;
  };

  someInstance.pop = function() {
    if (someInstance.count === 0) {
      return 0;
    }
    var idxToRemove = someInstance.count - 1;
    // console.log(idxToRemove);
    var itemToRemove = someInstance.storage[idxToRemove];
    delete someInstance.storage[idxToRemove];
    someInstance.count -= 1;
    return itemToRemove;
    // return someInstance.storage;
  };

  someInstance.size = function() {
    if (someInstance.storage === {}) {
      return 0;
    }
    return someInstance.count;
  };
  return someInstance;
};
