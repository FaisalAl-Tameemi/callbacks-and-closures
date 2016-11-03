'use strict';

/*
In this example, we will implement our own `.map` function to get a better
understanding of how callbacks and invoked.

Keep in mind that callbacks can be invoked multiple times by a function,
unlike how we used it in the previous example. A good use case of this is how
functions such as `.forEach` or `.map` invoke the callback multiple times.

Unlike the normal `.map` function that JS provides for us out of the box,
our function will have to the an array as a parameter as well.
*/

/**
  @description: transforms all array elements into a new array of equal size
                using the provided callback.
  @params: `elements` => the array to map
           `_mapElement` => the callback function to transform an element
*/
const map = function(elements, _mapElement){
  // check if the elements variable is actually an array
  // if(!typeof elements === 'Array'){ return; }

  const mapped_elements = []; // init an empty list to store new mapped values in
  // for each element in the provided array
  for(let i = 0; i < elements.length; i++){
    const current_elm = elements[i];
    const new_element = _mapElement(current_elm);
    mapped_elements.push(new_element);
  }
  // respond with the final mapped set of elements
  return mapped_elements;
}

// Test the map function above
const squared = map([1, 2, 3], function(current){
  return current * current;
});

console.log('Expected: [1, 4, 9],  Got:', squared);

// Another test
const people = [{
  name: 'John Doe',
  age: 23
}, {
  name: 'Jane Doe',
  age: 26
}];
const first_names = map(people, function(person){
  // return the first name only
  return person.name.split(' ')[0];
});

console.log('Expected: ["John", "Jane"],  Got:', first_names);
