var BinarySearchTree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

newTree.insert = function(value) {
    if (value === newTree.value || typeof value === "object" || typeof value === "function") {
      return;
    }
    var node = BinarySearchTree(value); //{value: __}
    if (value < newTree.value) {
        if (newTree.left === null) {
            newTree.left = node;
        } else {
            newTree.left.insert(value);
        }
    } else if (value > newTree.value) {
        if (newTree.right === null) {
            newTree.right = node;
        } else {
            newTree.right.insert(value);
        }
    }
    return newTree;

    // if (newTree.left === null && value < newTree.value) {
    //   newTree.left = BinarySearchTree(value);
    // } else if (newTree.right === null && value > newTree.value) {
    //   newTree.right = BinarySearchTree(value);
    // } else if (newTree.left !== null && value < newTree.value){
    //   newTree.left.insert(value);
    // } else if (newTree.right !== null && value > newTree.value){
    //   newTree.right.insert(value);
    // }
    // return newTree;

  } 
  newTree.contains = function(target) {
    //if target is equal to root
      // target is found (true)
    //if target is less than root
      //if left is null
        // target not found (false)
      //else
        // return contains on left subtree
    //if target is greater than root
      //if right is null
        // target not found (false)
      //else
        // return contains on right subtree
    if (target === newTree.value) {
      return true;
    }
    if (target < newTree.value) {
      if (newTree.left === null) {
        return false;
      } else {
        return newTree.left.contains(target);
      }
    }
    if (target > newTree.value) {
      if (newTree.right === null) {
        return false;
      } else {
        return newTree.right.contains(target);
      }
    }
    return false;
  }

  // accepts a callback and executes it on every value contained in the tree.
  // if left of root is not null 
    // 
    // look to left subtree, and recursively call the callback on each value in left subtree
  // if right of root is not null
    // look to right subtree & recursively call callback on each value in right subtree
  newTree.depthFirstLog = function(callback) {
    callback(newTree.value);
    if (newTree.left !== null) {
      // callback(newTree.left.value);
      newTree.left.depthFirstLog(callback);
    } 
    if (newTree.right !== null) {
      // callback(newTree.right.value);
      newTree.right.depthFirstLog(callback);
    }
  }

  return newTree;
};