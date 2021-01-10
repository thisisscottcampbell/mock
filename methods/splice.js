//The splice() method:
  //a. changes the original array and
  //b. returns an array that contains the deleted elements

//CAN Take up to three inputs
//1. Where to delete
//2. How many to delete
//3. Relace deleted elements with...




const array = [1,2,3,4,5,6]

//assign removed element to a label
const splicedItem = array.splice(2,1, 'insert me')
console.log(splicedItem);
  //3

//log array to see value after splice
console.log(array)
  //[1,2,'insert me',4,5,6]