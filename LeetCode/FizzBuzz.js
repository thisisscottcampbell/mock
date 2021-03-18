var fizzBuzz = function (n) {
	let buzzArr = [];

	for (let ct = 1; ct <= n; ct++) buzzArr.push(handleFizzBuzz(ct));

	return buzzArr;
};

const handleFizzBuzz = (num) => {
	const f = 'Fizz';
	const b = 'Buzz';
	const fb = 'FizzBuzz';

	if (num % 3 === 0 && num % 5 === 0) return fb;
	if (num % 3 === 0) return f;
	if (num % 5 === 0) return b;
	return num.toString();
};
