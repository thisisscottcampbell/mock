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

const postOrderTraverse = (tree, array = []) => {
	console.log(array);

	if (!tree) console.log('done here');

	if (tree) {
		console.log('curr val', tree.value);

		postOrderTraverse(tree.left, array);
		postOrderTraverse(tree.right, array);
		array.push(tree.value);
	}

	return array;
};

const postOrder = postOrderTraverse(tree);
console.log('postOrder =', postOrder);
