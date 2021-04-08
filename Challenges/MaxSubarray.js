const maxSubarray = (arr) => {
	let max = 0;

	const process = (array) => {
		if (array.length === 1) {
			if (max < array[0]) max = array[0];
			return;
		}

		array.reduce((acc, val) => {
			acc += val;
			if (acc > max) max = acc;
			return acc;
		});

		array.splice(0, 1);
		process(array);
	};
	process(arr);
	return max;
};
