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

const descendingOrderTraverse = (tree, array = []) => {
	console.log(array);

	if (!tree) console.log('done here');

	if (tree) {
		console.log('curr val', tree.value);

		descendingOrderTraverse(tree.right, array);
		array.push(tree.value);
		descendingOrderTraverse(tree.left, array);
	}

	return array;
};

const descendingOrder = descendingOrderTraverse(tree);
console.log('descendingOrder =', descendingOrder);

// []
// curr val 10
// []
// curr val 15
// []
// curr val 22
// []
// done here
// [ 22 ]
// done here
// [ 22, 15 ]
// done here
// [ 22, 15, 10 ]
// curr val 5
// [ 22, 15, 10 ]
// curr val 6
// [ 22, 15, 10 ]
// done here
// [ 22, 15, 10, 6 ]
// done here
// [ 22, 15, 10, 6, 5 ]
// curr val 2
// [ 22, 15, 10, 6, 5 ]
// done here
// [ 22, 15, 10, 6, 5, 2 ]
// curr val 1
// [ 22, 15, 10, 6, 5, 2 ]
// done here
// [
//   22, 15, 10, 6,
//    5,  2,  1
// ]
// done here
// descendingOrder = [
//   22, 15, 10, 6,
//    5,  2,  1
// ]
