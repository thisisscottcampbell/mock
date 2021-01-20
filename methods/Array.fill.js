//create a new, empty array with a length of 4
const arr = new Array(4)

//fill that array with:
    //arg 1: empty arrays, 
    //arg 2: starting at position 0,
    //arg 3:  until, and excluding, positon 4
arr.fill([], 0, 4)

console.log(arr)

//[ [], [], [], [] ]
