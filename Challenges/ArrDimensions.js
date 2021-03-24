// write a function "arrDimensions" that takes a (nested) array and returns the number of nesting levels in that array

const arrDimensions = (arr, depth = 1) => {
	const curr = arr[0];

	if (!curr) return depth;

	const processCurr = (arr) => {
		for (let i = 0; i < arr.length; i++) {
			const curr = arr[i];

			Array.isArray(curr) && arrDimensions(curr);
		}
	};

	if (!Array.isArray(curr)) {
		arr.splice(0, 1);

		return arrDimensions(arr, depth);
	}

	if (Array.isArray(curr)) {
		depth += 1;

		processCurr(curr);

		arr.splice(0, 1);

		return arrDimensions(arr, depth);
	}

	arrDimensions(arr, 1);
};

console.log(arrDimensions([2, 5, 1]));
//-> 1
// arrDimensions( [2, [5], 1] );
//-> 2
console.log(arrDimensions([2, [5], [3]]));
//-> 2
console.log(arrDimensions([2, [5], [3, [[16]]], 1]));
//-> 4
