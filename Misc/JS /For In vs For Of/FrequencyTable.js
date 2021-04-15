function firstNonRepeatingCharacter(string) {
	//val: [idx, idx];
	const freqTable = {};
	const nonRepeatingIdxs = [];

	for (const idx in string) {
		const char = string[idx];

		freqTable[char] ? freqTable[char].push(idx) : (freqTable[char] = [idx]);
	}

	for (const key in freqTable) {
		const idxArr = freqTable[key];
		const idx = idxArr[0];
		//*** WHEN NUMBERS ARE SET IN FREQUENCY TABLE THET ARE STRINGIFIED, WHEN EXTRACTING, IF INT VAL IS NEEDED, MUST PARSE */
		idxArr.length === 1 && nonRepeatingIdxs.push(Number(idx));
	}

	if (!nonRepeatingIdxs.length) return -1;
	else return nonRepeatingIdxs.reduce((acc, val) => (acc < val ? acc : val));
}
