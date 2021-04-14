//Implementing Binary Search Algo, determine if a value is present within an array.
//If so, return the given values index in the input array
//else, return -1

const binarySearch = (array, target) => {
	const process = (arr, rdx, ldx, midx) => {
		const leftNode = arr[ldx];
		const rightNode = arr[rdx];
		const midNode = arr[midx];

		if (leftNode === target) return ldx;
		if (rightNode === target) return rdx;
		if (midNode === target) return midx;

		if (midNode < target && midNode > leftNode) {
			ldx = midx + 1;
			return process(arr, rdx, ldx, getMid(ldx, rdx));
		}
		if (midNode > target && midNode < rightNode) {
			rdx = midx - 1;
			return process(arr, rdx, ldx, getMid(ldx, rdx));
		}

		return -1;
	};

	return process(array, array.length - 1, 0, getMid(array.length - 1, 0));
};

const getMid = (num1, num2) => Math.floor((num1 + num2) / 2);
