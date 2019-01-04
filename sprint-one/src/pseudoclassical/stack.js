var Stack = function() {
  this.storage = {};
  this.count = 0;
};

// Stack.stackMethods = {};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value; 
  //e.g {0: "first val", 1: "second val"}
  this.count += 1;
  return this.storage;
};

// the last elem is the size minus 1
Stack.prototype.pop = function() {
  if (this.count === 0) {
    return 0;
  }
  var lastIdx = this.count - 1;
  var elemToRemove = this.storage[lastIdx];
  delete this.storage[lastIdx];
  this.count -= 1;
  return elemToRemove;
};

Stack.prototype.size = function() {
  return this.count;
};
var s = new Stack();