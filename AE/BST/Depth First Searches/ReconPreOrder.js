class BST {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

const reconstructBst = (array) => {
	if (array.length === 0) return null;

	const curr = array[0];
	let rightRootIdx = array.length;

	for (let idx = 1; idx < array.length; idx++) {
		const val = array[idx];

		if (val >= curr) {
			rightRootIdx = idx;
			break;
		}
	}

	const leftTree = reconstructBst(array.slice(1, rightRootIdx));
	const rightTree = reconstructBst(array.slice(rightRootIdx));

	const tree = new BST(curr, leftTree, rightTree);

	console.log(tree);

	return tree;
};
