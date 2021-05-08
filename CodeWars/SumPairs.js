function sumPairs(ints, s) {
	const res = [];

	const process = (arr) => {
		if (!arr.length) return;

		const curr = arr.shift();

		for (let i = 0; i < arr.length; i++) {
			const temp = arr[i];

			console.log(curr + temp);

			if (curr + temp === s) {
				res.push(curr);
				res.push(temp);

				return;
			}
		}
		return process(arr);
	};
	process(ints, s);

	return res.length ? res : undefined;
}
