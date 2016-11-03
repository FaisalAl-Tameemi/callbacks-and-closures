'use strict';

const map = function(data, _transformElm){
  const output = [];

  debugger;

  data.forEach(function(current){
    const new_val = _transformElm(current);
    output.push(new_val);
    debugger;
  });

  return output;
}

const result = map([1, 4, 8, 12], function(num){
  // transform an elm to its double
  return num * 2;
});

console.log(result);
