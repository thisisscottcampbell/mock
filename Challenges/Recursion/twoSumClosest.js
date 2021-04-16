const twoSumClosest = (nums, target) => {
	let closest = { sum: 0, diff: Infinity };

	const process = (arr) => {
		if (!arr.length) return;
		const curr = arr.splice(0, 1)[0];

		let temp = 0;
		let currDiff = 0;

		arr.forEach((num) => {
			temp = num + curr;
			currDiff = Math.abs(target - temp);

			if (currDiff < closest.diff) {
				closest.diff = currDiff;
				closest.sum = temp;
			}
		});
		return process(arr);
	};

	process(nums);
	return closest.sum;
};
