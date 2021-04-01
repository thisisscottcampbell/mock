const cats = ['buddy', 'truman', 'scooby'];

const heroes = {
	batman: 'Bruce Wayne',
	superman: 'Clark Kent',
	ironman: 'Tony Stark',
};

//FOR IN
//returns a list of keys on the object being iterated
for (const cat in cats) {
	console.log(cat);
}
// "0", "1", "2",

for (const hero in heroes) {
	console.log(hero);
}
//"batman", "superman", "ironman"

//FOR OF
//returns a list of values of the properites of the objet being iterated
for (const cat of cats) {
	console.log(cat);
}
// "buddy", "truman", "scooby"

for (const hero of heroes) {
	console.log(hero);
}
// Not Iterable
