var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value; 
  //e.g {0: "first val", 1: "second val"}
  this.count += 1;
  return this.storage;
};

// the last elem is the size minus 1
stackMethods.pop = function() {
  if (this.count === 0) {
    return 0;
  }
  var lastIdx = this.count - 1;
  var elemToRemove = this.storage[lastIdx];
  delete this.storage[lastIdx];
  this.count -= 1;
  return elemToRemove;
};

stackMethods.size = function() {
  return this.count;
};
// var s = Stack();