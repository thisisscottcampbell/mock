//iterates through an array
//runs a callback on each value int he array
//if the callback returns true for at least one single value, entire function returns true
//The result of some will ALWAYS be a boolean

const arr = [1, 2, 3];

arr.some((num) => {
	return num < 2;
});
//true

const hasEvenNum = (arr) => {
	return arr.some((num) => {
		return num % 2 === 0;
	});
};
