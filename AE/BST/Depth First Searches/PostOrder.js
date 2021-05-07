function postOrderTraverse(tree, array) {
	if (tree) {
		postOrderTraverse(tree.left, array);
		postOrderTraverse(tree.right, array);
		array.push(tree.value);
	}
	return array;
}
