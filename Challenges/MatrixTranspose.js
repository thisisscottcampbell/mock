// Given a two dimensional array, write a function called 'matrixTranspose' that returns 
// a transposed version of that array.

// const matrix = [
//     [1, 2],
//     ['yo', 'hi'],
//     [3, 4]
//   ]

//[[1, 'yo', 3], [2, 'hi', 4]]

const matrixTranspose = matrix => {
    if (matrix.length < 1) return [];
    const transArray = matrix[0].map(array => [])
    
        matrix.forEach((arr, i) => {
        arr.forEach((element, i) => transArray[i].push(element))
        })
    
    return transArray;
        
};

// Extension:
// Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
// If given an mxn matrix, return undefined.

// For example:  
// const matrix = [  [1, 2, 3],
//                   [4, 5, 6],
//                   [7, 8, 9]  ]

// console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
//                                               [8, 5, 2],
//                                               [9, 6, 3]  ]

// BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).