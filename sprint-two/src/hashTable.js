var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//insert value into table, at key output by the hash function
HashTable.prototype.insert = function(k, v) {
  if (typeof k !== "string") {
    return;
  }
  var index = getIndexBelowMaxForKey(k, this._limit); // --> 2
  var tuple = [k, v];
  var bucketAtIndex = this._storage.get(index); // 

  // for subsequent insertion, if bucket does not exist at index
  // make new bucket
  // set index of storage to bucket
  // add tuple to it
  if (bucketAtIndex === undefined) {
    var newBucket = [];
    this._storage.set(index, newBucket); //[ [] ]
    newBucket.push(tuple);
    return this._storage;
  } else { 
    // bucket exists, assign the ref of that bucket to a variable
    // loop thru tuple in bucket, & check if key to be inserted 
    // already exists in one of the tuples
    // if so, then replace the tuple's value w/ new value
    // else just add key, value tuple to it
    var bucket = bucketAtIndex;
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket[i] = tuple;
        return this._storage;
      }      
    }
    bucket.push(tuple);
  }
  return this._storage;
};

HashTable.prototype.retrieve = function(k) {
  if (typeof k !== "string") {
    return undefined;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //check if storage has bucket at index 
  //if yes
    //if bucket 
      // loop through, check for key
      // if we find key
        // return value
  // other wise
    // return undefined
  if (bucket === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if bucket exists at index
  // if bucket doesn't exist, return undefined
  // if bucket exists, loop thru each tuple in bucket, and if 
  // desired key === current key, then remove tuple 
  // via splicing
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};
