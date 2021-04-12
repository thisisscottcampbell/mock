function nodeDepths(root, depth = 0) {
	if (!root) return 0;

	let total = 0;
	const process = (node, level) => {
		if (!node) return;

		total += level;

		process(node.left, level + 1);
		process(node.right, level + 1);
	};
	process(root, depth);
	return total;
}

// This is the class of the input binary tree.
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
