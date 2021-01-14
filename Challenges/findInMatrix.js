/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
    if (target < array[0]) return false;
    if (target  > array[array.length - 1]) return false;
    
    for (let i  = 0; i < array.length; i++) {
      const curr = array[i];
  
      if (target === curr) return true;
    }
    return false;
  };
  
  
  /*
  Extension:
  
  Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
  The matrix has the following properties:
    - Each subarray in the matrix contains numbers sorted in ascending order
    - The *last* element in each subarray is smaller than than the *first* element in each following subarray  
  
  ex:
  const matrix = [
    [-3, -1,  2,  4,  5],
    [ 6,  7,  8, 13, 37],
    [41, 49, 50, 61, 75]
  ];
  findIn2dMatrix(matrix, 13); -> true
  findIn2dMatrix(matrix, 42); -> false
  
  */
  
  const findIn2dMatrix = (matrix, num) => {
  
    const checkArr = [];
  
    for (let i = 0; i < matrix.length; i++) {
  
      const currArr = matrix[i];
      const lastNum = currArr[currArr.length - 1]
      const firstNum = currArr[0];
  
        if (num >= firstNum && num <= lastNum) {
          checkArr.push(...currArr);
          break;
        }
      }
  
    if (checkArr.length === 0) return false;
  
    for (let i = 0; i < checkArr.length; i++) {
      const currNum = checkArr[i];
  
      if (currNum === num) return true;
    }
    return false;
  };
  
  // const matrix = [
  //   [-3, -1,  2,  4,  5],
  //   [ 6,  7,  8, 13, 37],
  //   [41, 49, 50, 61, 75]
  // ];
  
  // console.log(findIn2dMatrix(matrix, 13))
  
  
