const invertBinaryTree = (tree) => process(tree);

const process = (tree) => {
	if (!tree.right && !tree.left) return tree;

	const right = tree.right ? tree.right : null;
	const left = tree.left ? tree.left : null;

	tree.right = left;
	tree.left = right;

	tree.left && process(tree.left);
	tree.right && process(tree.right);
};
