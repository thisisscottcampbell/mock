//Node Class
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

//LinkedList Class
class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		value ? (this.length = 1) : (this.length = 0);
	}
	//append node to list
	push(value) {
		const newNode = new Node(value);

		//edge
		if (!this.head || !this.head.value) {
			this.head = this.tail = newNode;
		} else {
			//congifure newNode to be the new tail

			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	//delete last node (i.e., delete tail node — reassign tail node)
	pop() {
		//edge
		if (this.length < 1) return;

		//edge
		if (this.length === 1) {
			this.head = this.tail = null;
			this.length--;
			return this;
		}

		//set pointers
		let prevNode;
		let currNode = this.head;

		//iterate until pointers point to desired nodes
		while (currNode.next) {
			prevNode = currNode;
			currNode = currNode.next;
		}

		//reconfigure tail of List to point to prev
		currNode.next = null;
		prevNode.next = null;
		this.tail = prevNode;
		this.length--;

		return this;
	}

	//prepend node
	unshift(value) {
		const newNode = new Node(value);

		//edge
		if (!this.head || !this.head.value) {
			this.head = this.tail = newNode;
		} else {
			//configure newNode to be the head of the List
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length += 1;

		return this;
	}

	//delete first node (i.e., delete head node — reassign head node)
	shift() {
		//edge
		if (!this.head) return this;
		//edge
		if (this.length === 1) {
			this.head = this.tail = null;
			this.length--;
			return this;
		}
		//edge
		else {
			//recongifure head of List

			let prevHead = this.head;
			let newHead = prevHead.next;
			prevHead.next = null;
			this.head = newHead;

			this.length -= 1;

			return prevHead;
		}
	}

	//find node by value
	getNodeValue(value) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) return currentNode;

			currentNode = currentNode.next;
		}
		return;
	}

	//get node at list position
	getNodeIdx(idx) {
		if (idx < 0 || idx > this.length) return;
		let counter = 1;
		let targetNode = this.head;

		while (counter < idx) {
			targetNode = targetNode.next;
			counter += 1;
		}
		return targetNode;
	}

	//delete node at position
	removeNode(idx) {
		if (idx < 1 || idx > this.length) return;
		if (idx === 1) return this.shift();
		if (idx === this.length) return this.pop();

		const targetNode = this.getNodeIdx(idx);
		const prevNode = this.getNodeIdx(idx - 1);

		prevNode.next = targetNode.next;
		targetNode.next = null;

		this.list--;

		return targetNode;
	}

	//add new node at position
	insertNode(value, idx) {
		if (idx > this.legnth || idx < 1) return;
		if (idx === 1) return this.unshift(value);

		const newNode = new Node(value);
		const targetNode = this.getNodeIdx(idx);
		const prevNode = this.getNodeIdx(idx - 1);

		newNode.next = targetNode;
		prevNode.next = newNode;

		this.length += 1;

		return this;
	}

	//edit existing node
	updateNode(value, idx) {
		if (idx < 1 || idx > this.length) return;

		const targetNode = this.getNodeIdx(idx);

		targetNode.value = value;

		return this;
	}

	insertSorted(value, idx) {
		const currHead = this.head;
		const newNode = new Node(value);

		if (!currHead) {
			this.head = newNode;
			this.tail = newTail;
		}
	}

	//reverse pointers to reverse order of nodes
	reverseList() {
		if (this.length < 1) return;
		if (this.length === 1) return this;

		let curr = this.head;

		this.head = this.tail;
		this.tail = curr;

		let next = curr.next;
		let prev = null;

		for (let i = 1; i <= this.length; i++) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		return this;
	}
}

const list = new LinkedList(1);

list.push(2);
list.push(3);
// list.unshift('prepend');
// list.push('append');
//list.pop();
//list.push(3);
// list.shift();
// const getIdx3 = list.getNodeIdx(3);
// console.log(getIdx3);
// const getValue2 = list.getNodeValue(2);
// console.log(getValue2);
// list.push(6);
// list.push(7);
// list.push(8);
//console.log(list);
//list.removeNode(1);
// list.removeNode(3)
//console.log(list.insertNode('INSERT ME', 2));
//list.updateNode('UPDATE ME', 1);
console.log(list);
list.reverseList();
console.log(list);
