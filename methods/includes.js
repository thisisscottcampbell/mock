//DEFINTION
  //The includes() method determines whether an array includes a certain value among its elemetns, returning true or false
  //Takes two params
    //the element
    //the index from which to start search

//
const arr = [1, 2, 3]

arr.includes(2)      // true
arr.includes(4)      // false
arr.includes(3, 3)   // false

const arrayFromIndex = [1, 2, 3, 10, 3 ]

arrayFromIndex.includes(2) //true
arrayFromIndex.includes(2, 2) //false 
arrayFromIndex.includes(3, 4) //true 