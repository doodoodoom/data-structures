var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count += 1;
    return storage;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return 0;
    }
    var idxToRemove = count - 1;
    // console.log(idxToRemove);
    var itemToRemove = storage[idxToRemove];
    delete storage[idxToRemove];
    count -= 1;
    return itemToRemove;
  };

  someInstance.size = function() {
    return count;
  };
  return someInstance;
};
