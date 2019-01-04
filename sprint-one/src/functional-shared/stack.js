var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
  return this.storage;
};
stackMethods.pop = function() {
  if (this.count === 0) {
    return 0;
  }
  var idxToRemove = this.count - 1; //NOTE: b/c started count at 0
  var itemtoRemove = this.storage[idxToRemove];
  delete this.storage[idxToRemove];
  this.count -= 1;
  return itemtoRemove;
};
stackMethods.size = function() {
  return this.count;
};