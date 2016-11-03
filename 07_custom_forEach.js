'use strict';

const forEach = function(data, _cb){
  // for every element within a list of element (aka Array)
  for(let i = 0; i < data.length; i++){
      // apply the callback to each element
      console.log('About to call the callback for index: ' + i);
      _cb(data[i]);
  }
}


forEach([1, 2, 3], function(curr){
  console.log("Current element is: " + curr);
});
