const maxProfit = function (prices) {
	let buyIn = prices[0];
	let profit = 0;

	const options = prices.slice(1);
	options.forEach((sellPrice) => {
		const sale = sellPrice - buyIn;
		if (sale > profit) profit = sale;

		if (sellPrice < buyIn) buyIn = sellPrice;
	});
	return profit;
};
