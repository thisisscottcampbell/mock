function productSum(array) {
	let sum = 0;

	const process = (arr, lvl = 1) => {
		for (const el of arr) {
			const val = el * lvl;

			if (Array.isArray(el)) process(el, lvl + 1, sum);
			else sum += val;
		}
		return;
	};

	process(array);
	return sum;
}
