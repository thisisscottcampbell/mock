//accepts a callback function and an optional second parameter
//iterates through an array
//runs a callback on each value in the array
//the first parameter to the callback is either the first value in the array or the optional second parameter
// the first parameter to the callback is often called "accumulatoar"
//the returned value from the callback becomes the new value of the accumulator
// *** whatever is returned from the callback function becomes the new value of the accumulator
// *** so acc is what we return

import { numberLiteralTypeAnnotation, tsNamespaceExportDeclaration } from "@babel/types";

// array.reduce(accumulator, nextValue, index, array) {
  //callback functionality
// }, optional second param)

//acc = first value in the array or optional second param
//nextValue = second value in the array or first if the optional second param is passed

//get total
nums.reduce((acc, next) => {
  return acc + next
}, /*opt*/)

let arrayOfNames [ 'player1', 'player2', 'player3' ]
names.reduce((acc, next) =>{
  return acc += '' next;
}, 'The team members are')

//returns, 'The team members are player1 player2 player3'