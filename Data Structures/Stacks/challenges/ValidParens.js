const isValid = (str) => {
	let stack = [];
	const symbols = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	for (let char of str) {
		const closeChar = symbols[char] ? symbols[char] : char;

		if (closeChar !== char) stack.push(char);
		else {
			const lastInStack = stack.pop();
			if (symbols[lastInStack] !== closeChar) return false;
		}
	}

	return stack.length === 0;
};
