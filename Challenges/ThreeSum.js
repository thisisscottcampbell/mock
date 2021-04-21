const threeNumberSum = (array, target) => {
	array.sort((a, b) => a - b);

	const triplets = [];

	for (let i = 0; i < array.length - 2; i++) {
		const curr = array[i];
		let leftIdx = i + 1;
		let rightIdx = array.length - 1;

		while (rightIdx > leftIdx) {
			const currSum = curr + array[leftIdx] + array[rightIdx];
			if (currSum === target) {
				triplets.push([curr, array[leftIdx], array[rightIdx]]);
				leftIdx++;
			}
			if (currSum > target) rightIdx--;
			if (currSum < target) leftIdx++;
		}
	}
	return triplets;
};

//OR

const threeSum = (arr) => {
	const nums = arr.sort((a, b) => a - b);

	const trips = [];

	if (nums[0] > 0) return trips;

	for (let indexA = 0; indexA < nums.length - 2; indexA++) {
		const currA = nums[indexA];

		if (currA === nums[indexA - 1]) continue;

		let indexB = indexA + 1;
		let indexC = nums.length - 1;

		while (indexB < indexC) {
			const currB = nums[indexB];
			const currC = nums[indexC];

			const trio = [currA, currB, currC];
			const trioSum = trio.reduce((acc, curr) => (acc += curr));

			if (trioSum === 0) {
				trips.push(trio);
				indexB++;
				indexC--;
			}

			if (currA + currB + currC > 0) {
				while (nums[indexC - 1] === currC) {
					indexC--;
				}
				indexC--;
			}

			if (currA + currB + currC < 0) {
				while (nums[indexB + 1] === currB) {
					indexB++;
				}
				indexB++;
			}
		}
	}

	const hashMap = {};

	trips.forEach((arr) => (hashMap[arr.join('|')] = arr));

	const res = Object.keys(hashMap).map((hashVal) => hashMap[hashVal]);

	//or
	//const res = Array.from(new Set(input.map(JSON.stringify)), JSON.parse)

	return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//[[-1, -1, 2], [-1, 0, 1]]
