/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = arr => {

    const cache = {}
    
    arr.forEach((num, i) => cache[arr.length - (i + 1)] = num);

    for (let key in cache) {
        const currVal = cache[key]
        arr[key] = currVal
    }
    
    return arr
     
};

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  
};