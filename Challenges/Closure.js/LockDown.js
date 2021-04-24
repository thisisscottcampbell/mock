// Write a function "lockDown" that takes a callback function (func) and a string as arguments. The string will be a password so to speak. lockDown returns a function (secureFunc). secureFunc must be provided the password string as its first argument. If the string is incorrect, 401 is returned. If correct, secureFunc will call func and return its output. If additional arguments are passed to secureFunc, other than the password, they should all be passed to func.

function lockDown(log, password) {
	const handleValidation = (str, ...input) => {
		if (str === password) return log(...input);
		else return 401;
	};
	return handleValidation;
}

const log = function (a, b, c) {
	console.log(a, b, c);
};

const validator = lockDown(log, 'lolol');
console.log(validator('lolol', 1, 2, 3));
//-> prints 1 2 3
console.log(validator('wrong', 1, 2, 3));
//-> 401
