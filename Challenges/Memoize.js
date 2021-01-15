/*

If you don't feel comfortable with async/promises, you are more than welcome
to do this (optional) pre-problem problem. Otherwise, we recommend checking out
the main problem.

Doing this pre-problem, however, may serve as an inspiration for the main
problem and be a helpful reminder. It's up to you.

Pre-problem:

Write a function that takes in a function of one parameter, and returns a new
memoized function. The memoized function maintains a cache object through
closure such that when we call the function f(3) -> 4, subsequent calls of
f(3) will not recompute f(3) but rather draw upon the cache to return 4.

Use an object store for the cache, as the function parameter may be any value
that's convertable to JSON. (This is just the memoize problem)

*/

const memoize = func => {
    const cache = {}
  
    const memoHandler = (input) => {
      if (cache[input]) return cache[input];
  
      cache[input] = func(input);
  
      return cache[input];
    }
    return memoHandler;
  };