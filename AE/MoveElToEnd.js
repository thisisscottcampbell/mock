const moveElementToEnd = (array, target) => {
	if (!array.length) return array;

	let i = 0;
	let calls = 0;

	const process = (arr) => {
		if (calls === arr.length - 1) return arr;

		calls += 1;

		const curr = arr[i];

		if (curr === target) {
			arr.splice(i, 1);
			arr.push(curr);
			return process(arr);
		}

		i += 1;
		return process(arr);
	};
	return process(array);
};
