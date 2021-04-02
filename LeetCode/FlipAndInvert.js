const flipAndInvertImage = (image) => {
	const toggle1 = () => 0;
	const toggle0 = () => 1;

	const flipRev = [];

	image.forEach((arr) => {
		const rev = [];

		for (let i = arr.length - 1; i >= 0; i--) {
			const curr = arr[i];
			rev.push(curr);
		}

		const flip = rev.map((bit) => (bit === 1 ? toggle1() : toggle0()));

		flipRev.push(flip);
	});

	return flipRev;
};
