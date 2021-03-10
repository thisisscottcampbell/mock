var removeDuplicates = function (nums) {
	let currCheck;

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		const next = nums[i + 1];

		if (curr === currCheck) {
			nums.splice(i - 1, 1);
			i--;
		} else if (curr === next) {
			currCheck = curr;
			nums.splice(i + 1, 1);
		}

		if (curr !== currCheck) currCheck = undefined;
	}

	return nums.length;
};
