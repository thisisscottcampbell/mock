const catsArr = ['buddy', 'truman', 'scooby'];

const heroesObj = {
	batman: 'Bruce Wayne',
	superman: 'Clark Kent',
	ironman: 'Tony Stark',
};

const str = 'str';

//FOR IN
//returns a list of keys on the object being iterated
for (const cat in catsArr) {
	console.log(cat);
}
// "0", "1", "2"

for (const char in str) {
	console.log(char);
}
// "0", "1", "2"

for (const hero in heroesObj) {
	console.log(hero);
}
//"batman", "superman", "ironman"

//FOR OF
//returns a list of values of the properites of the objet being iterated
for (const cat of catsArr) {
	console.log(cat);
}
// "buddy", "truman", "scooby"

for (const char of str) {
	console.log(char);
}
//"s", "t", "r"

for (const hero of heroesObj) {
	console.log(hero);
}
//Not Iterable
