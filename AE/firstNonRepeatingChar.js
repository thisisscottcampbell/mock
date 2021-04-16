function firstNonRepeatingCharacter(string) {
	//val: [idx, idx];
	const freqTable = {};
	let idx = -1;

	for (const idx in string) {
		const char = string[idx];

		freqTable[char] ? freqTable[char].push(idx) : (freqTable[char] = [idx]);
	}

	for (const key in freqTable) {
		const idxArr = freqTable[key];
		const i = Number(idxArr[0]);

		if (idxArr.length === 1 && (idx < 0 || idx > i)) idx = i;
	}

	return idx;
}
