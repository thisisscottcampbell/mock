function preOrderTraverse(tree, array) {
	if (tree) {
		array.push(tree.value);
		preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}
	return array;
}
