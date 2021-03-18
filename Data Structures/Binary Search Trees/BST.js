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
		//if there is no root;
		if (this.root === null) return false;

		//declare comp node
		let temp = this.root;

		while (temp) {
			//if the val is less than temp val, re-point temp to L and continue traversal to compare
			if (value < temp.value) temp = temp.left;
			//if the val is greater than temp val, re-point temp to R and continue traversal to compare
			else if (value > temp.value) temp = temp.right;
			//if it is neither > or < , then it is equal, and the tree contains value ... return true;
			else return true;
		}
		//no found, return false
		return false;
	}

	getHeight() {
		if (!this.root) return null;

		const handleHeight = (root, height = 1) => {
			if (!root.right && !root.left) return height;

			if (root.right & root.left)
				return Math.max(
					handleHeight(root.right, ++height),
					handleHeight(root.left, ++height)
				);
			else if (root.right) return handleHeight(root.right, ++height);
			else return handleHeight(root.left, ++height);
		};

		return handleHeight(this.root);
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
//console.log(tree.contains(14));
//console.log(tree.contains(69));
const height = tree.getHeight();
console.log(height);
console.log(tree);
