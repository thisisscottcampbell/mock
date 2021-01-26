const retrieveDepth = (arr, depth) =>
	arr.flat(depth - 1).filter((el) => !Array.isArray(el));

//OR

const retreiveDeepth = (arr, depth) => {
	const results = [];

	const process = (arr, depth) => {
		if (depth === 0) return;

		arr.forEach((el) => {
			if (Array.isArray(el)) process(el, depth - 1);
			else results.push(el);
		});
	};
	process(arr, depth);
	return results;
};

console.log(retrieveDepth([2, [4, [7], 1], 5], 1)); //toEqual([2, 5]);
console.log(retrieveDepth([2, [4, [7], 1], 5], 2)); //toEqual([2, 4, 1, 5]);
console.log(retrieveDepth([2, [4, [7], 1], 5], 3)); //toEqual([2, 4, 7, 1, 5]);
