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

    var subTree = BinarySearchTree(value);
    if (value < newTree.value) {
        if (newTree.left === null) {
            newTree.left = subTree;
        } else {
            newTree.left.insert(value);
        }
    } else if (value > newTree.value) {
        if (newTree.right === null) {
            newTree.right = subTree;
        } else {
            newTree.right.insert(value);
        }
    }
    return newTree;

  } 

  newTree.contains = function(target) {

  }

  newTree.depthFirstLog = function(callback) {


  }
  return newTree;
};
// var t = BinarySearchTree(8)
// t.insert(3);
// t.insert(15);
// t.insert(4)