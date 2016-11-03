'use strict';

/*
In this example, we will pass a callback to a `countDown` function
which will get called (aka "invoked") when the countdown is done.
*/

/**
  @description: counts down from `num` to 0 and prints each number
                then invokes the callback function if provided
  @params: `num`: Integer,
           `_done`: (callback) Function
*/
const countDown = function(num, _done){
  const t1 = new Date().getTime();
  for(let i = num; i >= 0; i--){
    console.log('Currently at ' + i);
  }
  const t2 = new Date().getTime();
  const diff = t2 - t1;
  return _done(num, diff);
}

// Test the `countDown` function
countDown(80, function(n, time_diff){
  console.log(`Counting to ${n} took ${time_diff} ms`);
});
