/**********************************************************************
Example 1: we can store a function like we store any other value.

In the example below, the function we are storing in `sumArray` is actually unnamed
which is to say it's an "annonymous" function.
**********************************************************************/

var sumArray = function(arr){
  // reduce array elements to a single element
  return arr.reduce(function(sum, elm){
    return sum += elm;
  }, 0);
}

var total = sumArray([44, 22, 12, 10]);

debugger;


/**********************************************************************
Example 2: We can also assign the value of `sumArray` to a function
           with the name `sunFunc`
**********************************************************************/

var sumArray = function sumFunc(arr){
  return arr.reduce(function(sum, elm){
    return sum += elm;
  }, 0);
}

var total = sumArray([44, 22, 12, 10]);

debugger;


/**********************************************************************
In the 2 examples above, we assigned a function to a variable. This is called
"function expression".

Example 3: we use "function declaration" below were we declar a function `sumArray`.
While the final value of the `total` variable will remain the same, a few things are happening
differently.
**********************************************************************/

// Using a function before its declaration is called function 'hoisting'.
// It's useful when you have multiple scripts running at once but can
// create bugs that are hard to track.
var total = sumArray([44, 22, 12, 10]);

function sumArray(arr){
  return arr.reduce(function(sum, elm){
    return sum += elm;
  }, 0);
}

debugger;


/**********************************************************************
QUESTION 1: what's the output of `my_var` below?
**********************************************************************/

function getValue() {
    return 44;
}

var my_var = getValue();

function getValue() {
    return 88;
}

debugger;


/**********************************************************************
QUESTION 2: what's the output of `my_var` below?
**********************************************************************/

var getValue = function() {
    return 44;
}

var my_var = getValue();

function getValue() {
    return 88;
}

debugger;


/**********************************************************************
QUESTION 3: what's the output of `my_var` below?
**********************************************************************/

var my_var = getValue();

var getValue = function() {
    return 44;
}

var getValue = function() {
    return 88;
}

debugger;


// [Discuss] this is why its generally better practice to use function expression.
