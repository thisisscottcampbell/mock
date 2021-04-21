const selectionSort = (array) => {
	//our state for the recursive call
	let idx = 0;

	const process = (arr) => {
		//POLICY:
		//BASE CASE: if arr[idx] is the last element, return
		//so, execute until we get to the last element.
		//don't need last element checked as it is what it is
		if (idx === arr.length - 1) return arr;

		//init minVal to init val
		let min = arr[idx];
		//init minIdx to init idx
		let minIdx = idx;
		//IF we do insert,
		//the min val will be inserted at the init idx, and
		//the original init val will be inserted at the minIdx
		//i.e., the swap ... min val inserted at init idx, init val inserted at the min idx

		//iterate over array, init at our state idx, update min/minIdx when condition is met
		for (i = idx; i < arr.length; i++) {
			const curr = arr[i];
			if (curr < min) {
				min = curr;
				minIdx = i;
			}
		}

		//POLICY: if the min val has been updated, perform swap
		//this functionality could be a helper
		if (min !== arr[idx]) {
			const initVal = arr[idx];
			arr[idx] = min;
			arr[minIdx] = initVal;
		}

		//update state
		idx += 1;
		//recursive call
		return process(arr);
	};

	return process(array);
};
