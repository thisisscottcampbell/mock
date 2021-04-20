const findThreeLargestNumbers = (array) => {
	const topThree = new Array(3).fill(null);

	array.forEach((num) => {
		processNum(num, topThree);
	});
	return topThree;
};

const processNum = (num, array) => {
	if (num > array[2] || !array[2]) return processArr(array, num, 2);
	if (num > array[1] || !array[1]) return processArr(array, num, 1);
	if (num > array[0] || !array[0]) return processArr(array, num, 0);
};

const processArr = (array, num, idx) => {
	if (idx === 0) array[idx] = num;

	if (idx === 1) (array[0] = array[idx]), (array[idx] = num);

	if (idx === 2)
		(array[0] = array[1]), (array[1] = array[2]), (array[idx] = num);
};
