class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) this.left = new BST(value);
			else this.left.insert(value);
		} else {
			if (this.right === null) this.right = new BST(value);
			else this.right.insert(value);
		}
		return this;
	}
}

let tree = new BST(10);
tree.insert(15);
tree.insert(22);
tree.insert(5);
tree.insert(6);
tree.insert(2);
tree.insert(1);

const preOrderTraverse = (tree, array = []) => {
	if (!tree) return;

	if (tree) {
		console.log(tree.value);
		//10, 5, 2, 1, 6, 15, 22
		array.push(tree.value);
		tree.left && preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}

	return array;
};

const pre = preOrderTraverse(tree);
console.log(pre);
