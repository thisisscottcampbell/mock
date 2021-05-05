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

	getThisMin() {
		if (this.left === null) return this.value;

		let temp = this;

		while (temp.left) temp = temp.left;

		return temp.value;
	}

	remove(rmVal, prev = null) {
		//If less than
		if (rmVal < this.value && this.left) return this.left.remove(rmVal, this);

		//If greater than
		if (rmVal > this.value && this.right) return this.right.remove(rmVal, this);
		//Found matching node
		else {
			//Handling when we have branches on both sides
			if (this.right && this.left) {
				//update curr node value to the min value of that curr node's right tree
				//i.e., perform swap
				this.value = this.right.getThisMin();
				//call remove on the node to the right of curr node to delete next instance
				return this.right.remove(this.value, this);
			}

			//Handling where we only have one remaining branch
			//a. No prev
			//Update root node
			if (!prev) {
				//Handling left only with no prev
				if (this.left) {
					//reassign the values of our current node to that of its left node's
					const newLeft = this.left.left ? this.left.left : null;
					this.value = this.left.value;
					this.left = newLeft;
				}
				//Handling right only with no prev
				if (this.right) {
					//reassign the values of our current node to that of its right node's
					const newRight = this.right.right ? this.right.right : null;
					this.value = this.right.value;
					this.right = newRight;
				}
			}
			//b. With prev
			//Update the branches of prev node
			//i. if current node <  prev node, and if our curr node has a left property, assign that to prev, otherwise assign to current node's right
			else if (prev.left === this)
				prev.left = this.left ? this.left : this.right;
			//ii. if current > prev node, and if our curr node has right property, assign that to prev, otherwise assign to current node's left
			else if (prev.right === this)
				prev.right = this.right ? this.right : this.left;
		}
		return this;
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
