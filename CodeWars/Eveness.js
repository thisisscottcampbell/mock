const iqTest = (str) => {
	const numArr = [];
	const oddArr = [];
	const evenArr = [];

	for (let i = 0; i < str.length; i++) {
		const curr = str[i];

		Number(curr) > 0 && numArr.push(Number(curr));
	}

	numArr.forEach((num, i) => {
		if (num % 2 === 0) evenArr.push({ num: num, i: i });
		else oddArr.push({ num: num, i: i });
	});

	if (oddArr.length > evenArr.length) {
		const returnObj = evenArr[0];
		return returnObj.i + 1;
	} else {
		const returnObj = oddArr[0];
		return returnObj.i + 1;
	}
};
