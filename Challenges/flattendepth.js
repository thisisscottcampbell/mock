const retrieveDepth = (arr, depth) => arr.flat(depth - 1).filter(el => !Array.isArray(el));


console.log(retrieveDepth([2, [4, [7], 1], 5], 1));//toEqual([2, 5]);
console.log(retrieveDepth([2, [4, [7], 1], 5], 2));//toEqual([2, 4, 1, 5]);
console.log(retrieveDepth([2, [4, [7], 1], 5], 3));//toEqual([2, 4, 7, 1, 5]);