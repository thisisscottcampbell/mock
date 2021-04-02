//setTimeout(function or anonymous, delay in ms);

// program to display a text using setTimeout method
const greet = () => console.log('Hello world');

setTimeout(greet, 1500);
console.log('This message is shown first');
setTimeout(() => console.log('saying hi using annonymous'), 3000)