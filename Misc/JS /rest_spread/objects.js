//SPREAD

const villain = {
	alias: null,
	nemesis: null,
	danger: null,
};

const Joker = { ...villain, alias: 'Joker', nemesis: 'Batman', danger: 10 };
const Penguin = { ...villain, alias: 'Penguin', nemesis: 'Batman' };

console.log(Joker);
//{ alias: 'Joker', nemesis: 'Batman', danger: 10 }
console.log(Penguin);
//{ alias: 'Penguin', nemesis: 'Batman', danger: 'N/A' }

const chillJoker = { ...Joker, danger: 0 };
console.log(chillJoker);
//{ alias: 'Joker', nemesis: 'Batman', danger: 10 }

const copyVillain = { ...villain };
console.log(copyVillain);
// {alias: null, nemesis: null, danger: null}

//REST

const hero = {
	name: 'Batman',
	city: 'Gotham',
	sidekick: 'Robin',
};

const { sidekick, ...rest } = hero;
//"rest" can be any label

console.log(sidekick);
//Robint
console.log(rest);
//{ name: Batman, city: Gotham }

const heroes = {
	1: {
		name: 'Bruce Wayne',
		alias: 'Batman',
	},
	2: {
		name: 'Clack Kent',
		alias: 'Superman',
	},
	3: {
		name: 'Peter Parker',
		alias: 'Spiderman',
	},
};

const IronMan = { name: 'Tony Stark', alias: 'Iron Man' };

const newHeroes = { ...heroes, 4: IronMan };

console.log(newHeroes);

//WITH KEY INTERPOLATION

const randomKey = Math.floor(Math.random() * 100);

const CaptainAmerica = { name: 'Steve Rogers', alias: 'Captain America' };

const newestHeroes = { ...newHeroes, [randomKey]: CaptainAmerica };

console.log(newestHeroes);
