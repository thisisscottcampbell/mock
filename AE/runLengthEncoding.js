const runLengthEncoding = (string) => {
	let encodedStr = '';

	const temp = [];

	for (let i = 0; i < string.length; i++) {
		const curr = string[i];
		const next = string[i + 1];

		temp.push(curr);

		if (curr !== next || temp.length === 9) {
			encodedStr += `${temp.length}${curr}`;
			temp.splice(0);
		}
	}
	return encodedStr;
};
