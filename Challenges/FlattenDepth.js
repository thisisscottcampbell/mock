const flattenDepth = (arr, depth) => {
	if (depth === 0) return arr.slice(0);

	const results = [];

	arr.forEach((el) => {
		if (Array.isArray(el))
			results = results.concat(flattenDepth(el, depth - 1));
		else results.push(el);
	});
	return results;
};
