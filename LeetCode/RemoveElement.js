var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		if (curr === val) {
			nums.splice(i, 1);
			i--;
		}
	}

	return nums.length;
};
