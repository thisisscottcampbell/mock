const arrayOfProducts = (array) => {
	return array.map((el, i) => {
		let arr;
		if (i === 0) arr = array.slice(1);
		else if (i === array.length) arr = array.slice(0, 1);
		else arr = [...array.slice(0, i), ...array.slice(i + 1, array.length)];

		return arr.reduce((acc, next) => (acc *= next));
	});
};
