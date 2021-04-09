var maxSlidingWindow = function (nums, k) {
	const res = [];

	const process = (arr, idx = 0) => {
		const window = genWindow(arr, idx, k);
		if (window.length < k) return;

		const max = Math.max(...window);

		res.push(max);

		process(arr, ++idx);
	};

	process(nums);
	return res;
};

const genWindow = (array, idx, range) => {
	const sliceCap = idx + range;
	const window = array.slice(idx, sliceCap);

	return window;
};
