const insertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		let min = array[i];
		for (let j = i - 1; j >= 0; j--) {
			const temp = array[j];

			if (min < temp) {
				array[j] = min;
				array[j + 1] = temp;
			}
		}
	}
	return array;
};
