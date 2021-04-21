const threeNumberSum = (array, target) => {
	array.sort((a, b) => a - b);

	const triplets = [];

	for (let i = 0; i < array.length - 2; i++) {
		const curr = array[i];
		let leftIdx = i + 1;
		let rightIdx = array.length - 1;

		while (rightIdx > leftIdx) {
			const currSum = curr + array[leftIdx] + array[rightIdx];
			if (currSum === target) {
				triplets.push([curr, array[leftIdx], array[rightIdx]]);
				leftIdx++;
			}
			if (currSum > target) rightIdx--;
			if (currSum < target) leftIdx++;
		}
	}
	return triplets;
};
