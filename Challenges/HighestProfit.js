/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/


const highestProfit = (stock, optimalProfit = 0) => {
    
    if (!Array.isArray(stock)) return 0;

    if (stock.length < 1) return optimalProfit;

    const currValue = stock[0];
    const sellOptions = stock.slice(1)
    const sellValue = Math.max(...sellOptions);
    const currProfit = sellValue - currValue;

    if (currProfit > optimalProfit) optimalProfit = currProfit

    return highestProfit(sellOptions, optimalProfit)
}

console.log('should Return 0, 0, 0, 0, 0 ... data type');
console.log(highestProfit(['ten', 'nine', 'eight']));
console.log(highestProfit({0: 10, 1: 5, 2: 0}));
console.log(highestProfit('stocks'));
console.log(highestProfit(1000));
console.log(highestProfit(undefined));

console.log('should Return 0, 0, 0 ... no profit')
console.log(highestProfit([100, 90, 70, 40, 0]));
console.log(highestProfit([]));
console.log(highestProfit([0]));

console.log('should return 10000, 300, 5')
console.log(highestProfit([0, 2000, 4000, 6000, 8000, 10000]));
console.log(highestProfit([2000, 1000, 100, 200, 400, 100]));
console.log(highestProfit([8, 5, 4, 3, 2, 7, 2]));

console.log('should return 1000, 600, 520');
console.log(highestProfit([1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100]));
console.log(highestProfit([0, 300, 200, 500, 600, 100, 399, 350, 500]));
console.log(highestProfit([200, 600, 700, 100, 300, 200, 620]));