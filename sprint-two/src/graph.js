var Graph = function() {
  // this = {};
  //this.value = value;
  this.counter = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  for (var count in this) {
    if (typeof this[count] === "object") {
      var singleNode = this[count];
      if (singleNode.value === node) {
        return;
      }
    }
  }
  var nodeObj = {value: node, edges: []}; // 4 --> {value: 4, edges: []}
  this[this.counter] = nodeObj;
  this.counter++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (typeof this[key] === "object") {
      if (this[key].value === node) {
        return true;
      }
    }
  }
  return false;
};

/* Removes a node from the graph, including all its edges
basic case: { 0: {value: 4, edges: [] } } --> remove 4 --> { }
edge case: {0: {value: 4, edges: [5, 3]}, 1: {value: 5, edges: [4, 3] }, 2: {value: 3, edges [4, 5]} }
--> remove 4 
--> {1: {value: 5, edges: [3] }, 2: {value: 3, edges [5]} }

*/
Graph.prototype.removeNode = function(node) {
  // loop thru graph obj based on counter (key)
  // for each node object, if the obj's value === node, delete the graph obj's key
  var isDeleted = false;
  for (var count in this) {
    if (typeof this[count] === "object") {
      var singleNode = this[count];
      if (singleNode.value === node) {
        delete this[count];
        isDeleted = true;
        this.counter --;
      }
    }
  }
  if (isDeleted) {
    for (var count in this) {
      if (typeof this[count] === "object") {
        var singleNode = this[count];
        for (var i = 0; i < singleNode.edges.length; i ++) {
          if (singleNode.edges[i] === node) {
            singleNode.edges.splice(i, 1);
          }
        }
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
/*
{0: {value: 4, edges: [5, 3]}, 1: {value: 5, edges: [4, 3] }, 2: {value: 3, edges [4, 5]} }
g.hasEdge(4, 3) will check for fromNode, and see if its edges property includes toNode
will check for toNode, and see if its edges property includes fromNode
 */
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasFromNode = false;
  var hasToNode = false;
  for (var count in this) {
    if (typeof this[count] === "object") {
      var singleNode = this[count];
      if (singleNode.value === fromNode && singleNode.edges.includes(toNode)) {
        hasToNode = true;
      }
    }
  }

  for (var count in this) {
    if (typeof this[count] === "object") {
      var singleNode = this[count];
      if (singleNode.value === toNode && singleNode.edges.includes(fromNode)) {
        hasFromNode = true;
      }
    }
  }
  return hasFromNode && hasToNode;
};

// Connects two nodes in a graph by adding an edge between them.
// { 0: {value: 4, edges: [] }, 1: {value: 5, edges: [] } } --> addEdge(4, 5)
// --> {0: {value: 4, edges: [5]}, 1: {value: 5, edges: [4] } }
Graph.prototype.addEdge = function(fromNode, toNode) {
  //loop thru graph obj, find fromNode || toNode 
  // if fromNode === value, then add toNode to fromNode's edges, 
  // if toNode === value, then add fromNode to toNode's edges
  for (var count in this) {
    var singleNode = this[count];
    if (singleNode.value === fromNode) {
      singleNode.edges.push(toNode);
    }
    if (singleNode.value === toNode) {
      singleNode.edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};