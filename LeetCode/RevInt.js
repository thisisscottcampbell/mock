const reverse = (int) => {
	if (int === 0) return 0;

	let revInt = '';

	const strNum = int.toString();

	if (strNum[0] === '-') revInt += strNum[0];

	const strArr = strNum.split('');

	if (strArr[0] === '-') strArr.splice(0, 1);

	for (let i = strArr.length - 1; i >= 0; i--) {
		const curr = strArr[i];

		revInt += curr;
	}

	return Number(revInt);
};
