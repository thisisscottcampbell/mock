const spiralTraverse = (array) => {
	if (array.length === 1) {
		if (Array.isArray(array)) return array[0];
		else return array;
	}

	const spiral = [...array.shift()];

	let processRight = false;
	let processDown = true;
	let processLeft = false;
	let processUp = false;

	const process = (arr) => {
		if (!arr.length) return;

		//RIGHT
		if (processRight) {
			//with R we are processing the top most subArr
			const sub = arr.shift();

			sub.forEach((el) => {
				spiral.push(el);
			});

			processRight = false;
			processDown = true;
			return process(arr);
		}

		//DOWN
		if (processDown) {
			//with processDown, we are processing the last el of each sub array of the matrix
			const depth = arr.length;

			let row = 0;

			while (row < depth) {
				const sub = arr[row];
				const lastEl = sub.pop();
				spiral.push(lastEl);

				row++;
			}
			processDown = false;
			processLeft = true;

			const cleaned = cleanArr(arr);

			return process(cleaned);
		}

		//LEFT
		if (processLeft) {
			//with L we are processing the bottom most subArr, in reverse order
			const sub = arr.pop();

			for (let i = sub.length - 1; i >= 0; i--) {
				const curr = sub[i];
				spiral.push(curr);
			}
			processLeft = false;
			processUp = true;
			return process(arr);
		}

		//UP
		if (processUp) {
			//wiht U we are processing the first el of each subArr, starting at bottom subArr;

			let row = arr.length - 1;

			while (row >= 0) {
				const sub = arr[row];
				const firstEl = sub.shift();
				if (firstEl) spiral.push(firstEl);

				row--;
			}
			processUp = false;
			processRight = true;

			const cleaned = cleanArr(arr);

			return process(cleaned);
		}
	};
	process(array);
	return spiral;
};

const cleanArr = (array) => {
	const res = [];

	array.forEach((arr) => {
		if (arr.length) res.push(arr);
	});
	return res;
};
