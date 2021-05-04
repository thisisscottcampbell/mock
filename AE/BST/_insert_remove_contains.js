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

	contains(value) {
		if (this.value === value) return true;

		if (value < this.value) {
			if (this.left === null) return false;
			return this.left.contains(value);
		} else {
			if (this.right === null) return false;
			return this.right.contains(value);
		}
	}

	__contains(value) {
		if (value < this.value) {
			if (this.left === null) return false;
			return this.left.contains(value);
		} else if (value > this.value) {
			if (this.right === null) return false;
			return this.right.contains(value);
		} else return true;
	}
}

let tree = new BST(10);
tree.insert(4);
tree.insert(12);
tree.insert(7);
tree.insert(34);
tree.insert(11);
console.log(tree);
let doesContain = tree.contains(11);
console.log(doesContain);
doesContain = tree.__contains(11);
console.log(doesContain);
doesContain = tree.contains(13);
console.log(doesContain);
doesContain = tree.__contains(13);
console.log(doesContain);
