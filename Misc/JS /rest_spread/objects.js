//* Spread first
const Joker = { ...villain, alias: 'Joker', nemesis: 'Batman', danger: 10 };
const Penguin = { ...villain, alias: 'Penguin', nemesis: 'Batman' };

console.log(Joker);
//{ alias: 'Joker', nemesis: 'Batman', danger: 10 }
console.log(Penguin);
//{ alias: 'Penguin', nemesis: 'Batman', danger: 'N/A' }
