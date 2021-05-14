// This is an input class. Do not edit.
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function binaryTreeDiameter(tree) {
	// Write your code here.
	return genTreeData(tree).diameter;
}

const genTreeData = (tree) => {
	if (tree === null) return new TreeData(0, 0);

	const left = genTreeData(tree.left);
	const right = genTreeData(tree.right);

	const rootMax = left.height + right.height;
	const maxDiameter = Math.max(left.diameter, right.diameter);
	const currDiameter = Math.max(rootMax, maxDiameter);
	const currHeight = 1 + Math.max(left.height, right.height);

	return new TreeData(currDiameter, currHeight);
};

class TreeData {
	constructor(diameter, height) {
		this.diameter = diameter;
		this.height = height;
	}
}
