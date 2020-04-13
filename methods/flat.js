// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//var newArray = arr.flat([depth]);
// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
  //depth isn't really index in a sense, it's more of a layer concept...like each array embedded deeper beneath surface of parent container

//A new array with the sub-array elements concatenated into it.


const arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]