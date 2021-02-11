const sortArray = (array) => {
	if (!array.length) return array;

	const sortedOdds = [];
	const odds = [];

	array.forEach((num, i) => {
		if (num % 2 === 0) sortedOdds[i] = num;
		else {
			odds.push(num);
			sortedOdds.push(null);
		}
	});

	const oddsSort = odds.sort((a, b) => a - b);

	sortedOdds.forEach((num, i) => {
		if (num === null) {
			const oddNum = oddsSort.splice(0, 1)[0];
			sortedOdds[i] = oddNum;
		}
	});
	return sortedOdds;
};
