//DEFINTION
  //The includes() method determines whether an array includes a certain value among its elemetns, returning true or false
  //Takes two params
    //the element
    //the index from which to start search

//
array = [1, 2, 3]

array.includes(2)      // true
array.includes(4)      // false
array.includes(3, 3)   // false

arrayFromIndex = [1, 2, 3, 10, 3 ]

array.includes(2) //true
array.includes(2, 2) //false 
array.includes(3, 4) //true 