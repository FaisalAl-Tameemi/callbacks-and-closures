'use strict';

// PERSON ==> { name: STRING, age: INT }
const people = [
  {name: 'Jane', age: 25},
  {name: 'John', age: 24}
];

/**
  withOUT closures
*/

const printName = function(person){
  console.log(person.name);
}
const printAge = function(person){
  console.log(person.age);
}

people.forEach(printName);
console.log("-----------");
people.forEach(printAge);

console.log('====================================');


/**
  with closures
*/

const pluck = function(key){
  return function(person){
    console.log(person[key]);
  }
}

// print all names using forEach
people.forEach(pluck('name'));
console.log("-----------");
people.forEach(pluck('age'));
