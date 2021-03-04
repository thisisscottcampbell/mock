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
