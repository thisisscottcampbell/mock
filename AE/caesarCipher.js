function caesarCipherEncryptor(string, key) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const stringArr = string.split('');

	let caesarStr = '';

	for (const char of stringArr) {
		const charAlphaIdx = alphabet.indexOf(char);

		const caesarIdx = genIdx(charAlphaIdx, key);

		const caesarChar = alphabet[caesarIdx];

		caesarStr += `${caesarChar}`;
	}

	return caesarStr;
}

const genIdx = (idx, key) => {
	let res = idx + key;

	if (idx + key <= 25) return res;

	if (res >= 52) {
		const rem = Math.floor(res / 25);
		res -= rem;

		return res % 25;
	} else {
		res = res - 25;
		return res - 1;
	}
};
