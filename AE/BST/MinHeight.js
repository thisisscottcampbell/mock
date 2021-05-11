const minHeightBst = (array) => processBST(array);

const processBST = (array, tree = null, start = 0, end = array.length - 1) => {
	if (end < start) return;

	const midIdx = Math.floor((start + end) / 2);
	const value = array[midIdx];

	if (!tree) tree = new BST(value);
	else tree.insert(value);

	processBST(array, tree, start, midIdx - 1);
	processBST(array, tree, midIdx + 1, end);

	return tree;
};
