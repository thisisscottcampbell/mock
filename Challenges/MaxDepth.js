const maxDepth = (arr) => {
	const depths = [];

	arr.forEach((el) => {
		if (Array.isArray(el)) depths.push(maxDepth(ele));
	});

	return 1 + Math.max(0, ...depths);
};
