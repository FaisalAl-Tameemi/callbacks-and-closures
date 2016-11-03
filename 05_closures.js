'use strict';

// PERSON ==> { name: STRING, age: INT }
const people = [
  {name: 'Jane', age: 25, hobbies:['soccer', 'tennis']},
  {name: 'John', age: 24, hobbies:['tennis']}
];

const printName = function(person){
  console.log(person.name);
}

const printAge = function(person){
  console.log(person.age);
}

const printHobbies = function(person){
  console.log(person.hobbies);
}

people.forEach(printer('name'));

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
