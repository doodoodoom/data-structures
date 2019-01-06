var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    //list[count] = nodeToInsert;
    //if list is empty, 
      // set list.head to node
      // set list.tail to node
    var nodeToInsert = Node(value);
    if (list.tail === null && list.head === null) {
      list.head = nodeToInsert;
      list.tail = nodeToInsert;
    } else {
      list.tail.next = nodeToInsert;
      list.tail = nodeToInsert;
    }
    return list;
  }; 

  // removes the first node from the list and returns its value
  // change the head's next 
  list.removeHead = function() {
    var nodeToRemove = list.head;
    list.head = list.head.next;
    return nodeToRemove.value;
  };

  /*
  returns boolean reflecting 
  whether or not the passed-in value is in the linked list
  STRATEGY:
  * set current node to be the head
  * while current is not null (not at the end)
  * check if current node's value = target
  * if so return true, else 
  * set current to be current.next
  * return false otherwise
  */
  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      //currentNode = currentNode.next;
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};