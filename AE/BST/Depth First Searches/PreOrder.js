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
	console.log(array);

	if (!tree) console.log('done here');

	if (tree) {
		console.log(tree.value);
		//10, 5, 2, 1, 6, 15, 22
		array.push(tree.value);
		tree.left && preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}

	return array;
};

const preOrder = preOrderTraverse(tree);
console.log('preOrder =', preOrder);

// []
// curr val 10
// [ 10 ]
// curr val 5
// [ 10, 5 ]
// curr val 2
// [ 10, 5, 2 ]
// curr val 1
// [ 10, 5, 2, 1 ]
// done here
// [ 10, 5, 2, 1 ]
// done here
// [ 10, 5, 2, 1 ]
// curr val 6
// [ 10, 5, 2, 1, 6 ]
// done here
// [ 10, 5, 2, 1, 6 ]
// curr val 15
// [ 10, 5, 2, 1, 6, 15 ]
// curr val 22
// [
//   10,  5,  2, 1,
//    6, 15, 22
// ]
// done here

//preorder = pre [ 10,  5,  2, 1, 6, 15, 22 ]
