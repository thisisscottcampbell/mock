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

		//if there is no root;
		if (!this.root) {
			this.root = newNode;
			return;
		}

		const traverse = (node) => {
			//if value is less than
			if (value < node.value) {
				if (node.left) traverse(node.left);
				else node.left = newNode;
			}

			//if value is greater than
			if (value > node.value) {
				if (node.right) traverse(node.right);
				else node.right = newNode;
			}
		};

		traverse(this.root);
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
	getMin() {
		let curr = this.root;
		while (curr.left) {
			curr = curr.left;
		}
		return curr.value;
	}
	getMax() {
		let curr = this.root;
		while (curr.right) {
			curr = curr.right;
		}
		return curr.value;
	}
	DFSinOrder() {
		//returm values lowest to highest
		const result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);
			result.push(node.value);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);
		return result;
	}
	DFSpreOrder() {
		//process left side of tree first

		const result = [];

		const traverse = (node) => {
			result.push(node.value);

			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);
		return result;
	}
	DFSpostOrder() {
		//process  right side first

		const result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);

			result.push(node.value);
		};

		traverse(this.root);
		return result;
	}
	BFS() {
		const result = [];
		const queue = [];

		queue.push(this.root);

		while (queue.length) {
			const curr = queue.shift();

			result.push(curr.value);

			if (curr.left) queue.push(curr.left);

			if (curr.right) queue.push(curr.right);
		}

		return result;
	}
}

const tree = new BST();
tree.insert(15);
tree.insert(3);
tree.insert(36);
tree.insert(2);
tree.insert(12);
tree.insert(28);
tree.insert(39);
// console.log(tree.contains(2));
// console.log(tree.contains(69));
// const height = tree.getHeight();
// console.log(height);
console.log(tree);
// console.log(tree.getMax());
// console.log(tree.getMin());
console.log('in order', tree.DFSinOrder());
//2, 3, 12, 15, 28, 36, 39
console.log('preorder', tree.DFSpreOrder());
//15, 2, 3, 12, 36, 28, 39
console.log('post order', tree.DFSpostOrder());
//2, 12, 3, 28, 39, 36, 15
console.log('bfs', tree.BFS());
//15, 3, 36, 2, 12, 28, 39
