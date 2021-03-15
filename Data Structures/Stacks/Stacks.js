//STACKS ARE
// L.I.F.O
//LAST IN FIRST OUT

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.top = newNode;
		value ? (this.length = 1) : (this.length = 0);
	}
	//add node to top of stack
	add(value) {
		const newNode = new Node(value);

		if (this.length === 0) this.top = newNode;
		else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.length++;
		return;
	}
	//remove node from top of stack
	remove() {
		if (this.length === 0) return this;
		if (this.length === 1) {
			const newNode = new Node(null);
			this.top = newNode;
		}

		let target = this.top;
		let newTop = target.next;
		target.next = null;
		this.top = newTop;

		this.length--;
		return this;
	}
}

const stack = new Stack(1);
stack.add(2);
stack.add(3);

console.log(stack);

stack.remove();
console.log(stack);
