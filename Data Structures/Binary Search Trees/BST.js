class Node {
	constructor(value) {
		this.value = value;
		//left is less than
		this.left = null;
		//right is greater than
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);

		//if BST is empty, insert at root and return
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		//init temp node at root to begin comparing as we traverse;
		let temp = this.root;

		//traverse untill we explcitly return;
		while (true) {
			//if we have a duplicate value, return
			if (newNode.value === temp.value) return undefined;
			//if the new val less than temp val?
			if (newNode.value < temp.value) {
				//if left spot is open, insert and return;
				if (temp.left === null) {
					temp.left = newNode;
					return this;
				}
				//if not, update temp and continue traversing...
				temp = temp.left;
			} else {
				//the val is greater than in this case
				//if right is empty
				if (temp.right === null) {
					//insert and return.
					temp.right = newNode;
					return this;
				}
				//update temp and continue traverse
				temp = temp.right;
			}
		}
	}
	contains(value) {
		if (this.root === null) return false;

		let temp = this.root;

		while (temp) {
			if (value < temp.value) temp = temp.left;
			else if (value > temp.value) temp = temp.right;
			else return true;
		}
		return false;
	}
}

const tree = new BST();
tree.insert(13);
tree.insert(23);
tree.insert(5);
tree.insert(34);
tree.insert(11);
tree.insert(4);
tree.insert(14);
console.log(tree.contains(14));
console.log(tree.contains(69));
console.log(tree);
