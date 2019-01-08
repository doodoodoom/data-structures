var BinarySearchTree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  newTree.insert = function(value) {

//     if (newTree.left === null && value < newTree.value) {
//       newTree.left = BinarySearchTree(value);
//     } else if (newTree.right === null && value > newTree.value) {
//       newTree.right = BinarySearchTree(value);
//     } else if (newTree.left !== null && value < newTree.value){
//       newTree.left.insert(BinarySearchTree(value));
//     } else if (newTree.right !== null && value > newTree.value){
//       newTree.right.insert(BinarySearchTree(value));
//     }
//     return newTree;

    var node = BinarySearchTree(value);
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

  } 

  newTree.contains = function(target) {
    //if target is equal to root
      // target is found (true)
    //if target is less than root
      //if root.left is null
        // target not found (false)
      //else
        // run contains again (recurse)
    //if target is greater than root
      //if root.right is null
        // target not found (false)
      //else
        // run contains again (recurse)
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
  }

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
// var t = BinarySearchTree(8)
// t.insert(3);
// t.insert(15);
// t.insert(4)