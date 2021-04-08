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

const array = [1, 2, 3, 4, 5, 6];

//const spliceReturnsArrayOfDeletedElements = array.splice(2,2, 'insert me')

//console.log(spliceReturnsArrayOfDeletedElements);
//[3,4]
//console.log(array)
//[1,2,'insert me', 5,6]

//const arr = [1,2,3,4,5,6]
//const spliced = arr.splice(1,1);

//console.log(arr);
//[1, 3, 4, 5, 6]
//console.log(spliced);
//[2]

//const singleArgSplice = arr.splice(2);

//console.log(arr);
//[1, 3]
// console.log(singleArgSplice);
//[4, 5, 6]

// const spliceFirst = array.splice(0, 1);

// console.log(spliceFirst);
// //[1]

// console.log(array);
//[2,3,4,5,6]

// const spliceSecond = array.splice(1, 1);
// console.log(spliceSecond);
// //[2]
// console.log(array);
// //[1,3,4,5,6]

// const spliceFirstTwo = array.splice(0, 2);
// console.log(spliceFirstTwo);
//[1,2]
// console.log(array);
//[3,4,5,6]

//***TO SPLICE ANY SINGLE ELEMENT***

//Array.splice(atTheIdxOfEl, removeThisMany);

//const demo = [1,2,3,4,5,6,7,8];
//demo.splice(7, 1);
//console.log(demo)
//[1,2,3,4,5,6,7]

//demo.splice(3, 1);
//console.log(demo);
// /[1,2,3,5,6,7]

//SPLICE THE LAST
//demo.splice(demo.length - 1);
