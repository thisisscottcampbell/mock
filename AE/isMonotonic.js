const isMonotonic = (array) => {
	if (array.length < 2) return true;

	let isInc = false;
	let isDec = false;
	let prev = array[0];

	for (let i = 1; i < array.length; i++) {
		const curr = array[i];

		if (curr > prev) isInc = true;
		if (curr < prev) isDec = true;

		if (isInc && isDec) return false;

		prev = curr;
	}
	return true;
};
