var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  //.children property, an array containing a number of subtrees
  // [{[ {}, {}], value: ___ }, {}, {}]
  newTree.children = [];  
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

// takes any value, sets that as the target of a node, and adds that node as a child of the tree
// 
treeMethods.addChild = function(value) {
  var subTree = Tree(value);
  this.children.push(subTree);
  return this;
};

treeMethods.contains = function(target) {
    var wasFound = false;
    function helper(childTree) {
      if (childTree.value === target) {
          wasFound = true;
          return;
      }
      if (childTree.children.length) {
          for (var i = 0; i < childTree.children.length; i++) {
//           console.log("current value is ", childTree.children[i].value);
          helper(childTree.children[i]);
        }
      }
   }
    helper(this);
    return wasFound;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
