//int.toFixed(number)
//returms a string representing the given number using fixed-point notion to the passed in argument

const price = 242;
const strPrice = price.toFixed(2);
console.log(strPrice);
//'242.00'
console.log(typeof strPrice === 'string');
//true
const backToIntPrice = Number(strPrice);
console.log(backToIntPrice);
//242
console.log(backToIntPrice === '242.00');
//true
console.log(backToIntPrice === 242.0);
//true
console.log(typeof backToIntPrice === 'number');
//true
console.log(strPrice === backToIntPrice);
//false
