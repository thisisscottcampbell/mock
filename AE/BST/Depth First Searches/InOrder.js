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

const inOrderTraverse = (tree, array = []) => {
	console.log(array);

	if (!tree) console.log('done here');

	if (tree) {
		console.log(tree.value);

		tree.left && inOrderTraverse(tree.left, array);
		array.push(tree.value);
		inOrderTraverse(tree.right, array);
	}

	return array;
};

const inOrder = inOrderTraverse(tree);
console.log('inOrder =', inOrder);

// []
// 'curr val' 10
// []
// 'curr val' 5
// []
// 'curr val' 2
// []
// 'curr val' 1
// [ 1 ]
// done here
// [ 1, 2 ]
// done here
// [ 1, 2, 5 ]
// 'curr val' 6
// [ 1, 2, 5, 6 ]
// done here
// [ 1, 2, 5, 6, 10 ]
// 'curr val' 15
// [ 1, 2, 5, 6, 10, 15 ]
// 'curr val' 22
// [ 1,  2,  5, 6, 10, 15, 22 ]
// done here

// inOrder = [ 1,  2,  5, 6, 10, 15, 22 ]
