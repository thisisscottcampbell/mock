const smallestDifference = (arrayOne, arrayTwo) => {
	const checkArr = arrayTwo.sort((a, b) => a - b);
	const diffVals = new Array(2).fill(null);

	let diff = Infinity;
	let i = 0;

	const process = (arr) => {
		if (!arr.length) return;

		const curr = arr.shift();

		for (const num of checkArr) {
			const temp = getDiff(curr, num);
			if (temp < diff) {
				diff = temp;
				[diffVals[0], diffVals[1]] = [curr, num];
			}
			if (temp > diff && num >= curr) return process(arr);
		}
		return process(arr);
	};

	process(arrayOne);
	return diffVals;
};

const getDiff = (a, b) => Math.abs(a - b);
