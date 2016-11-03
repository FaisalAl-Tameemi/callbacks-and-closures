'use strict';

/*
Since functions are treated like all other first class objects in JS.

This allows us to pass functions to other functions. We have previously
called this a callback (or a "higher order function").

By that principle, we should be able to return functions as the response
for another function. We can refer to functions that return other functions
as generators.
*/

const generateMapFunc = function(type){
  switch(type){
    case 'double':
      return function(num){ return 2 * num; }
    case 'square':
      // or return an annonymous function
      return function(num){ return num * num; }
    default:
      // unknown case, ~ else
      break;
  }
}

var data = [1, 2, 3, 4];

var doubler = generateMapFunc('double');
var doubled_vals = data.map(doubler);

// var squared_vals = data.map(generateMapFunc('square'));

debugger;
