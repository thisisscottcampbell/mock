//NOT POINTER
let num1 = 5;
let num2 = num1;

console.log(num1);
//5
console.log(num2);
//10

num1 = 10;

console.log(num1);
//10
console.log(num2);
//5

//They are assigned to values in memory, not spaces in memory

//POINTER

let obj1 = { val: 1 };
let obj2 = obj1;

console.log(obj1);
//{ val: 1 }
console.log(obj2);
//{ val: 1 }

obj1.val = 100;

console.log(obj1);
//{ val: 100 }
console.log(obj2);
//{ val: 100 }

//BOTH POINT TO THE SAME SPACE IN MEMORY AND ON LINE 23 THE VALUE THEY POINT TO IS UPDATED

const obj3 = { val: 24 };

obj2 = obj3;

console.log(obj2);
//{ val: 24 }

obj1 = obj3;

console.log(obj1);
//{ val: 24 }
