function tandemBicycle(redShirts, blueShirts, fastest) {
	// Write your code here.
	let fast = 0;
	let slow = 0;

	if (fastest) {
		const fastReds = redShirts.sort((a, b) => b - a);
		const slowBlues = blueShirts.sort((a, b) => a - b);

		fastReds.forEach((red, i) => {
			const blue = slowBlues[i];
			red > blue ? (fast += red) : (fast += blue);
		});
	} else {
		const fastReds = redShirts.sort((a, b) => b - a);
		const fastBlues = blueShirts.sort((a, b) => b - a);

		fastReds.forEach((red, i) => {
			const blue = fastBlues[i];
			red > blue ? (slow += red) : (slow += blue);
		});
	}

	return fastest ? fast : slow;
}
