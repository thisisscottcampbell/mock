function inOrderTraverse(tree, array) {
	if (tree) {
		inOrderTraverse(tree.left, array);
		array.push(tree.value);
		inOrderTraverse(tree.right, array);
	}
	return array;
}
