var generateParenthesis = function (n) {
	if (n === 0) return [''];
	if (n === 1) return ['()'];

	const res = [];

	const openChar = '(';
	const closedChar = ')';

	const len = n * 2;

	const process = (open = 0, closed = 0, str = '') => {
		//if (str.length === len) return res.push(str);
		//if (open === n && closed === n) return res.push(str);
		if (closed === n) return res.push(str);

		open < n && process(open + 1, closed, str + openChar);
		open > closed && process(open, closed + 1, str + closedChar);
	};

	process();
	return res;
};
