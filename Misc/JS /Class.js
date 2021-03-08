class Cat {
	constructor(name, color, gender) {
		this.name = name;
		this.color = color;
		this.gender = gender;
	}
	getName() {
		return this.name;
	}
	setName(newName) {
		return (this.name = newName);
	}
}

const Garfield = new Cat('Garfield', 'orange', 'M');
const Buddy = new Cat('Buddy', 'orange', 'M');
const Felix = new Cat('Felix', 'tuxedo', 'M');

console.log(Garfield);
//Cat { name: 'Garfield', color: 'orange', gender: 'M' }
console.log(Buddy);
//Cat { name: 'Buddy', color: 'orange', gender: 'M' }
console.log(Felix);
//Cat { name: 'Felix', color: 'tuxedo', gender: 'M' }

console.log(Felix.getName());
//Felix

Felix.setName('Sylvester');

console.log(Felix.getName());
//Sylvester
