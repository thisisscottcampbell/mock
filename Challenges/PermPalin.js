const permPalin = (str) => {
	const cache = {};

	isEven = str.length % 2 === 0 ? true : false;

	for (const char of str) {
		cache[char] ? (cache[char] += 1) : (cache[char] = 1);
	}

	if (isEven) {
		for (const key in cache) {
			const val = cache[key];
			if (val % 2 !== 0) return false;
		}
	} else {
		let oddCount = 0;

		for (const key in cache) {
			const val = cache[key];
			if (val % 2 !== 0) oddCount += 1;

			if (oddCount > 1) return false;
		}
	}
	return true;
};
