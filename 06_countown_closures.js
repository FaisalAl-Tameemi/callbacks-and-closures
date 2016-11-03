'use strict';

function generateCounter(direction){
  var countDown = function(n){...}
  var countUp = function(n){...}

  if(direction === 'up'){
    return countUp;
  }else if(direction === 'down'){
    return countDown;
  }
}

var upCounter = generateCounter('up');
var downCounter = generateCounter('down');

upCounter(100);
