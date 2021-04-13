//SOLUTION A
const getNthFib = (n) => {
	if (n === 2) return 1;
	else if (n === 1) return 0;
	else return getNthFib(n - 1) + getNthFib(n - 2);
};

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
