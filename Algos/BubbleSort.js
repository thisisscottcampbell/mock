const arr = [1, 10, 5, 7, 3, 2, 8, 4];

const bubbleSort = (array) => {
	let sorting = true;

	const processBubble = (arr) => {
		if (!sorting) return;
		sorting = false;

		for (let i = 0; i < arr.length; i++) {
			const curr = arr[i];
			const next = arr[i + 1];

			if (curr > next) {
				runUpdate(i, i + 1, arr);
				sorting = true;
			}
		}
		return processBubble(arr);
	};
	processBubble(array);
	console.log('return bubble');
	return array;
};

const runUpdate = (currIdx, nextIdx, arr) => {
	// const curr = arr[currIdx];
	// const next = arr[nextIdx];

	// arr[nextIdx] = curr;
	// arr[currIdx] = next;

	[arr[currIdx], arr[nextIdx]] = [arr[nextIdx], arr[currIdx]];
};

console.log(bubbleSort(arr));
