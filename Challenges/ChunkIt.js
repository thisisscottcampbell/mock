// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

const chunkItUp = (arr, size) => {
	const chunksArr = [];

	const processArr = (array, len) => {
		if (!array.length) return;

		let i = 0;
		const subArr = [];

		while (i <= len) {
			const curr = array[i];

			if (curr === undefined) {
				chunksArr.push(subArr);
				return;
			}

			if (i < len) subArr.push(curr);

			if (i === len) chunksArr.push(subArr);

			i++;
		}

		array.splice(0, len);
		return processArr(array, len);
	};
	processArr(arr, size);
	return chunksArr;
};

//chunkItUp(["a", "b", "c", "d"], 2) //-> [["a", "b"], ["c", "d"]].
//chunkItUp([0, 1, 2, 3, 4, 5], 3) //-> [[0, 1, 2], [3, 4, 5]].
//chunkItUp([0, 1, 2, 3, 4, 5], 2) //-> [[0, 1], [2, 3], [4, 5]].
//chunkItUp([0, 1, 2, 3, 4, 5], 4) //-> [[0, 1, 2, 3], [4, 5]].
//chunkItUp([0, 1, 2, 3, 4, 5, 6], 3) //-> [[0, 1, 2], [3, 4, 5], [6]].
//chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //-> [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) //-> [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
