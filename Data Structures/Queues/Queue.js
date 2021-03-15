//QUEUE IS
//F.I.F.0
//First in, First out

class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
	}
}

class Queue {
	constructor(value) {
		const newNode = new Node(value);
		this.first = newNode;
		this.last = newNode;
		value ? (this.length = 1) : (this.length = 0);
	}
	//get in back of line
	push(value) {
		const newNode = new Node(value);

		if (this.length < 1) this.first = this.last = newNode;
		if (this.length === 1) {
			this.first.prev = newNode;
			this.last = newNode;
		} else {
			this.last.prev = newNode;
			this.last = newNode;
		}

		this.length++;
		return this;
	}
	//remove from front of line
	shift() {
		if (this.length === 0) return;
		if (this.length === 1) this.first = this.last = new Node(null);

		const newFirst = this.first.prev;
		this.first.prev = null;
		this.first = newFirst;
	}
}

const queue = new Queue(1);
queue.push(2);
queue.push(3);

console.log(queue);
queue.shift();
console.log(queue);
