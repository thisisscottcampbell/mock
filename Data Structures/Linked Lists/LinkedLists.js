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
		if (!this.tail.value) return undefined;

		//edge
		if (this.length === 1) {
			this.head = this.tail = null;
			this.length--;
			return this;
		}

		//set pointers
		let prevNode;
		let currNode = this.head;
		let nextNode = currNode.next;

		//iterate until pointers point to desired nodes
		while (currNode.next) {
			prevNode = currNode;
			currNode = nextNode;
		}

		//reconfigure tail of List to point to prev
		this.tail = prevNode;
		prevNode.next = null;
		this.length--;

		return prevNode;
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
	findNode(value) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) return currentNode;

			currentNode = currentNode.next;
		}
		return null;
	}

	//id node at list position
	traverseList(idx) {
		if (idx > this.length) return;
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
		if (idx > this.legnth || idx < 1) return;
		if (idx === 1) return this.deleteHead();
		if (idx === this.length) return this.deleteTail();

		const deleteNode = this.traverseList(idx);
		const nextNode = deleteNode.next;
		const previousNode = deleteNode.previous;
		nextNode.previous = previousNode;
		previousNode.next = nextNode;

		this.length -= 1;

		return this;
	}

	//add new node at position
	insertNode(value, idx) {
		if (idx > this.legnth || idx < 1) return;
		if (idx === 1) return this.prepend(value);
		if (idx === this.length) return this.push(value);

		const targetNode = this.traverseList(idx);
		const newNode = new Node(value);
		const previousNode = targetNode.previous;

		newNode.previous = previousNode;
		newNode.next = targetNode;
		targetNode.previous = newNode;
		previousNode.next = newNode;

		this.length += 1;

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
}

const list = new LinkedList();

//list.push(2);
//list.push(3);
list.unshift('prepend');
list.unshift('this should be first');
list.shift();
list.shift();
//list.shift();
// list.push('append');
//list.pop();
//list.push(3);
// list.deleteTail();
// const find2 = list.findNode(2);
// console.log(find2)
// list.push(6);
// list.push(7);
// list.push(8);
// list.removeNode(3)
// list.removeNode(3)
// list.insertNode('INSERT ME', 3)
console.log(list);
