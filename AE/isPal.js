const isPalindrome = (string) => {
	if (string.length === 1) return true;
	let lIdx = 0;
	let rIdx = string.length - 1;

	while (lIdx < rIdx) {
		const left = string[lIdx];
		const right = string[rIdx];

		if (left !== right) return false;
		lIdx++;
		rIdx--;
	}

	return true;
};
