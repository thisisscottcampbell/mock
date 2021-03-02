const hero = {
	alias: 'Batman',
	name: 'Bruce Wayne',
};

const { alias, name } = hero;

console.log(`${name} is ${alias}!`);
//Bruce Wayne is Batman!

const villain = {
	alias: 'N/A',
	nemesis: 'N/A',
	danger: 'N/A',
};

//* Spread first
const Joker = { ...villain, alias: 'Joker', nemesis: 'Batman', danger: 10 };
const Penguin = { ...villain, alias: 'Penguin', nemesis: 'Batman' };

console.log(Joker);
//{ alias: 'Joker', nemesis: 'Batman', danger: 10 }
console.log(Penguin);
//{ alias: 'Penguin', nemesis: 'Batman', danger: 'N/A' }
