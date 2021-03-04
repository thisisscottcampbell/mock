//SPREAD
const states = ['MA', 'TX', 'CO'];
const cities = ['Boston', 'Austin', 'Denver'];

const statesAndCities = [...states, ...cities];
console.log(statesAndCities);
//['MA', 'TX', 'CO', 'Boston', 'Austin', 'Denver']

//REST
const cats = ['Garfield', 'Felix', 'Cheshire', 'Sylvester'];

const [firstCat, secondCat, ...rest] = cats;

console.log(firstCat);
//Garfield
console.log(secondCat);
//Felix
console.log(rest);
//['Cheshire', 'Sylvester']
