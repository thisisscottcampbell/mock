/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? */

const twoSum = (arr, target) => {
	let isSum = false;

	const process = (arr) => {
		if (arr[0] === undefined) return;

		const curr = arr[0];

		for (let i = 1; i < arr.length; i += 1) {
			const next = arr[i];
			if (curr + next === target) isSum = true;
		}

		arr.splice(0, 1);
		return process(arr);
	};

	process(arr);
	return isSum;
};

//ITERATIVE
const twoSumm = (arr, target) => {
	for (let i = 0; i < arr.length - 1; i++) {
		const curr = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			const next = arr[j];
			console.log(curr, next);
			if (curr + next === target) return [curr, next];
		}
	}
	return [];
};
