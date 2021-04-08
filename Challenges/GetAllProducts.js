const getAllProducts = (array) => {
	const cache = {};

	let idx = 0;

	while (idx < array.length) {
		cache[idx] = [];

		idx++;
	}

	array.forEach((num, i) => {
		for (const key in cache) {
			if (i != key) cache[key].push(num);
		}
	});

	return Object.values(cache).map((arr) =>
		arr.reduce((acc, val) => (acc *= val))
	);
};

// const getAllProducts = (array) => {
//   // Initilize a new res array with same length of input array and fill every index to be 1
//   const res = new Array(array.length).fill(1);
//   // Initialize l/r to store product of left side (exclusive)/product of right side (exclusive)
//   let [l, r] = [1, 1];
// ​
//   for (let i = 0; i < array.length; i++) {
//     // Scan from the left and accumulate res and l
//     res[i] *= l;
//     l *= array[i];
//     // Scan from the right and accumulate res and r
//     res[array.length - i - 1] *= r;
//     r *= array[array.length - i - 1];
//   }
// ​
//   return res;
// };
