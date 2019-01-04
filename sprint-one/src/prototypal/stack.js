var Stack = function() {
  var someInstance = Object.create(Stack.stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value) {
  this.storage[this.count] = value; 
  //e.g {0: "first val", 1: "second val"}
  this.count += 1;
  return this.storage;
};

// the last elem is the size minus 1
Stack.stackMethods.pop = function() {
  if (this.count === 0) {
    return 0;
  }
  var lastIdx = this.count - 1;
  var elemToRemove = this.storage[lastIdx];
  delete this.storage[lastIdx];
  this.count -= 1;
  return elemToRemove;
};

Stack.stackMethods.size = function() {
  return this.count;
};
var s = Stack();