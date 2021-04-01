function findClosestValueInBst(tree, target) {
	const store = {
		val: tree.value,
		diff: Math.abs(target - tree.value),
	};

	const process = (node) => {
		if (node.value === target) {
			store.val = node.value;
			store.diff = 0;
			return;
		}

		const currDiff = Math.abs(target - node.value);

		if (currDiff < store.diff)
			(store.diff = currDiff), (store.val = node.value);

		if (target > node.value && node.right) process(node.right);
		if (target < node.value && node.left) process(node.left);
	};

	process(tree);
	return store.val;
}
