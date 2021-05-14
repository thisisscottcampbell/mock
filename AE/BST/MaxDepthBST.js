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
	MAXDepths(tree) {
		const handleRight = (node, right = 0) => {
			right += 1;
			return node.right ? handleRight(node.right, right) : right;
		};

		const handleLeft = (node, left = 0) => {
			left += 1;
			return node.left ? handleLeft(node.left, left) : left;
		};
		const right = tree.right ? handleRight(tree.right) : 0;
		const left = tree.left ? handleLeft(tree.left) : 0;
		const max = Math.max(right, left);
		const total = right + left;

		console.log('right', right);
		console.log('left', left);
		console.log('max', max);
		console.log('total', total);
	}
}

let tree = new BST(10);
tree.insert(15);
tree.insert(22);
tree.insert(5);
tree.insert(6);
tree.insert(2);
tree.insert(1);
const depth = tree.MAXDepths(tree);
console.log('depth', depth);
