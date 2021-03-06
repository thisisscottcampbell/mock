var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const next = nums[j];

			if (curr + next === target) return [i, j];
		}
	}
};
