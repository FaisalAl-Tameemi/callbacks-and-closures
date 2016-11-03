'use strict';

// PERSON ==> { name: STRING, age: INT }
const people = [
  {name: 'Jane', age: 25},
  {name: 'John', age: 24}
];

const printName = function(person){
  console.log(person.name);
}
const printAge = function(person){
  console.log(person.age);
}

people.forEach(printName);
people.forEach(printAge);

/****************************/

const generatePrintFunc = function(key){
  return function(person){
    console.log(person[key]);
  }
}

// print all names using forEach
people.forEach(generatePrintFunc('name'));
console.log("-----------")
people.forEach(generatePrintFunc('age'));
