//Delete operator

const cats = {
	Cheshire: 'far out',
	Garfield: 'lazy',
	Felix: 'OG',
	Sylvester: 'Goofy',
	CatInTheHat: 'Mischievious',
};

console.log(cats);

delete cats.Felix;

const CitH = 'CatInTheHat';

delete cats[CitH];

console.log(cats);
