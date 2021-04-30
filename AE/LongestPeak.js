function longestPeak(array) {
	let peak = 0;
	let i = 1;

	while (i < array.length - 1) {
		const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
		if (!isPeak) {
			i++;
			continue;
		}

		let leftIdx = i - 2;
		while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
			leftIdx--;
		}
		let rightIdx = i + 2;
		while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
			rightIdx++;
		}

		const currPeak = rightIdx - leftIdx - 1;

		peak = Math.max(currPeak, peak);

		i = rightIdx;
	}
	return peak;
}

// function longestPeak(array) {
//   let peak = 0;

// 	const process = arr => {

// 		if (!arr.length) return;

// 		let isUp = true;
// 		let isDown = false;

// 		let currPeak = 0;

// 		let prev = -Infinity

// 		for (const num of arr) {

// 			if (isUp && num > prev) {
// 				currPeak += 1;
// 				prev = num;
// 				continue;
// 			}

// 			if (isUp && num < prev) {
// 				isUp = false;
// 				isDown = true;
// 			};

// 			if (isDown && num > prev || num === prev || isDown && currPeak === 1) {
// 			 		arr.splice(0, currPeak);
// 					return process(arr)
// 			};

// 			if (isDown && num < prev) {
// 				currPeak += 1;
// 				prev = num;
// 			}

// 			if (isDown) peak = currPeak > peak ? currPeak : peak;
// 		}
// 	}
// 	process(array)
// 	return peak
// }
