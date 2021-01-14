const cats = ['buddy', 'felix', 'garfield'];
const dogs = ['pluto', 'snoopy', 'brian'];

const catsAndDogs = [...cats, ...dogs];

//['buddy', 'felix', 'garfield','pluto', 'snoopy', 'brian']

const catsAndDogsAndBirds = [...catsAndDogs, 'woodstock'];

// ['buddy', 'felix', 'garfield', 'pluto', 'snoopy', 'brian', 'woodstock']

const person = {
	name: 'Ace',
	age: 24,
};

const newPerson = { ...person, spiritAnimal: 'otter' };

//newPerson ... { name: 'Ace', age: 24, spiritAnimal: 'otter }

const copyCats = [...cats];
// ['buddy', 'felix', 'garfield']
