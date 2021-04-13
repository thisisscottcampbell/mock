//SOLUTION B
function getNthFib(n) {
	const sequence = [];

	const process = () => {
		if (sequence.length === n) return sequence[n - 1];

		if (!sequence.length) {
			sequence.push(0);
			return process();
		}

		if (sequence.length === 1) {
			sequence.push(1);
			return process();
		} else {
			const fib1 = sequence[sequence.length - 1];
			const fib2 = sequence[sequence.length - 2];

			const newFib = fib1 + fib2;

			sequence.push(newFib);

			return process();
		}
	};
	return process();
}
