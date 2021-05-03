function mergeOverlappingIntervals(array) {
	const sorted = array.sort((a, b) => a[0] - b[0]);

	const res = [];

	const process = (arr, tempLow = null, tempHigh = null) => {
		if (!array.length) {
			if (tempLow) res.push([tempLow, tempHigh]);
			return;
		}

		//temp is empty
		//we are looking at curr in relation to temp
		if (!tempLow) {
			const curr = arr[0];
			const next = arr[1] ? arr[1] : null;

			//no overlap
			if (!next || curr[1] < next[0]) {
				res.push(curr);

				arr.splice(0, 1);

				return process(arr);
			}

			//overlap
			//init temp
			else {
				tempLow = curr[0];
				curr[1] >= next[1] ? (tempHigh = curr[1]) : (tempHigh = next[1]);

				arr.splice(0, 2);

				return process(arr, tempLow, tempHigh);
			}
		}

		//we have a temp
		//we are looking at temp in relation to curr
		else {
			const curr = arr[0];

			//if no overlap
			if (tempHigh < curr[0]) {
				res.push([tempLow, tempHigh]);

				return process(arr, null, null);
			}

			//if overlap
			else {
				if (tempHigh < curr[1]) {
					tempHigh = curr[1];

					arr.splice(0, 1);

					return process(arr, tempLow, tempHigh);
				} else {
					arr.splice(0, 1);

					return process(arr, tempLow, tempHigh);
				}
			}
		}
	};
	process(sorted);
	return res;
}
