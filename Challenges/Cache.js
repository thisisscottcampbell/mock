/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = callback => {
    const cache = {};


    const cacheHandler = input => {
        const value = cache[input];

        if (value) return value;

        const output = callback(input);
        
        cache[input] = output;
        return output;
    }

    return cacheHandler;
};


/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = callback => {
    const cache = {};


    const cacheHandler = (...input) => {

        const value = cache[input];
        if (value) return value;

        const output = callback(...input);
        
        cache[input] = output;
        return output;
    }

    return cacheHandler;
};

module.exports = { fastCache, fastCacheAdvanced };