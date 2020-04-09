//TYPEOF = If variable is a number, it will returns a string named “number”, or string -> 'string'

const numOrNot = {
  a: 'there',
  b: 8,
  c: 7,
  d: '10',
  e: '!'
};
let total = 0;

//iterate over the obj sumMe with a for..in
	for (let key in sumMe) {
  //write a conditional, IFF a key's corresponding value is a number, increment total variable value by that number
	if(typeof sumMe[key] === 'number') total = total + sumMe[key] 
}