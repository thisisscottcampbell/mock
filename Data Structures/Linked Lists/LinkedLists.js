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
		this.length = 1;
	}
	//append node to list
	push(value) {
		const newNode = new Node(value);

		//edge
		if (!this.head) this.head = this.tail = newNode;
		else {
			//congifure newNode to be the new tail

			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length += 1;

		return this;
	}

	//delete last node (i.e., delete tail node — reassign tail node)
	pop() {
		//edge
		if (!this.head) return undefined;

		//set pointers
		let temp = this.head;
		let prev = this.head;

		//iterate until pointers point to desired nodes
		while (temp.next) {
			prev = temp;
			temp = temp.next;
		}

		//reconfigure tail of List to point to prev
		this.tail = prev;
		this.tail.next = null;
		this.length--;

		//edge
		if (this.length === 0) {
			this.head = this.tail = null;
		}
		return temp;
	}

	//delete first node (i.e., delete head node — reassign head node)
	shift() {
		//edge
		if (!this.head) return undefined;
		//edge
		if (this.head === this.tail) this.head = this.tail = null;
		else {
			//recongifure head of List

			const prevHead = this.head;
			const newHead = prevHead.next;
			prevHead.next = null;
			this.head = newHead;
		}

		this.length -= 1;

		//edge
		if (this.length === 1) {
			this.tail = this.head;
			this.tail.next = null;
		}

		return prevHead;
	}

	//prepend node
	unshift(value) {
		const newNode = new Node(value);

		//edge
		if (!this.head) this.head = this.tail = newNode;
		else {
			//configure newNode to be the head of the List
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length += 1;

		return this;
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

const list = new LinkedList(1);

list.push(2);
list.push(3);
list.unshift('prepend');
list.push('append');
//list.pop();
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
