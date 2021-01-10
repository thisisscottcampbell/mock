//The splice() method:
  //a. changes the original array and
  //b. returns an array that contains the deleted elements

//CAN Take up to three inputs
//1. Where to delete
//2. How many to delete
//3. Relace deleted elements with...

//With ONE argument
//will split array at the element
//and return new array from that element--inclusive



const array = [1,2,3,4,5,6]

//assign removed element to a label
const spliceReturnsArrayOfDeletedElements = array.splice(2,2, 'insert me')
console.log(spliceReturnsArrayOfDeletedElements);
  //[3,4]

//log array to see value after splice
console.log(array)
  //[1,2,'insert me', 5,6]

const arr = [1,2,3,4,5,6]
const spliced = arr.splice(1,1);

console.log(arr);
//[1, 3, 4, 5, 6]
console.log(spliced);
//[2]

const singleArgSplice = arr.splice(2);

console.log(arr);
//[1, 3]
console.log(singleArgSplice);
//[4, 5, 6]