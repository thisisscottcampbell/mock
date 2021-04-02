var arraysIntersection = function (...args) {
	const cache = {};
	const common = [];

	const deduped = args.map((arr) =>
		arr.filter((el, i) => arr.indexOf(el) === i)
	);

	deduped.forEach((arr) => {
		arr.forEach((num) => {
			cache[num] ? (cache[num] += 1) : (cache[num] = 1);
		});
	});

	for (let key in cache) {
		cache[key] === 3 && common.push(Number(key));
	}

	return common;
};

const arr1 = [1, 2, 3, 3, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 7, 9];
const arr3 = [1, 3, 4, 5, 8, 8, 8, 8, 8, 8];

console.log(arraysIntersection(arr1, arr2, arr3));
