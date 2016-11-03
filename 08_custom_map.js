'use strict';

const map = function(data, _transformElm){
  const output = [];

  data.forEach(function(current, i){
    const new_val = _transformElm(current);
    output.push(_transformElm(current));
  });

  return output;
}

const result = map([1, 4, 8, 12], function(num){
  // transform an elm to its double
  return num * 2;
});

console.log(result);
