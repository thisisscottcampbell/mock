//pre order, depth first search

function branchSums(root) {
	const res = [];

	const process = (node, sum = 0) => {
		const newSum = sum + node.value;

		if (!node.left && !node.right) return res.push(newSum);

		if (node.left) process(node.left, newSum);
		if (node.right) process(node.right, newSum);
	};

	process(root);
	return res;
}
