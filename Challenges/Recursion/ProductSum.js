const productSum = (array) => {
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
};

//VS

function productSum(array, multiplier = 1) {
	let sum = 0;
	for (let element of array) {
		if (Array.isArray(element)) {
			sum += productSum(element, multiplier + 1) * multiplier;
		} else {
			sum += element * multiplier;
		}
	}
	return sum;
}
