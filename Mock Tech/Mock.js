/* ** PART 1 ** */

/*
Declare a variable 'myNums' and set it to an object.
*/

const myNums = {};

/* add 5 key value pairs to myNums, each key assigned the value of a different two-digit number */

myNums.a = 12;
myNums.b = 32;
myNums.c = 44;
myNums.d = 71;
myNums.e = 13
;

/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

const largestSwap = num => {
    const revNum = num.toString().split('').reverse().join('');
    
    if (revNum > num) return false;
    else return true;
}


/* Check that your 'largestSwap' function is working correctly by passing randomNum and favoriteNum to your 'largestSwap' function */

console.log(largestSwap(72));
//true
console.log(largestSwap(27));
//false

/* write a function 'swapped' that accepts an object and a function as an inputs. 
Swapped should return an array of the values from the input object that return true when passed to the input function. 

i.e., Pass your largestSwap function, and your myNums object to 'swapped', testing each value in myNums with largestSwap
*/

const swapped = (obj, func) => {
  const res = [];

  for (const key in obj) {
    const curr = obj[key];
    if (func(curr)) res.push(curr);
  }

  return res;
}

console.log(swapped(myNums, largestSwap));

/* ** CLOSURE ** */

// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

const rollCall = array => {

  let callTracker = 0;
 
   const coveHandler = () => {
     const idx = callTracker;
     if (!array[idx]) return console.log('Everyone accounted for')
     callTracker += 1
     return console.log(array[idx])
     
   }
   return coveHandler
 } 
 
//  // /*** Uncomment these to check your work! ***/
//  const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
//  const callOne = rollCaller()
//  const callTwo = rollCaller()
//  const callThree = rollCaller()
//  const callFour = rollCaller()
//  console.log(callOne) // => 'Victoria'
//  console.log(callTwo) // => 'Juan'
//  console.log(callThree) // => 'Ruth'
//  console.log(callFour) // => 'Everyone accounted for'

/* ** RECURSION ** */

/* Declare a variable with the label 'nums' and assign it the value of whole intergers, 1 - 6.
Using recursion, write a function 'leaveOddsDoubleEvens' that takes an array of intergers as an input. This function will return an array of intergers that cotains all the odd values from the input array and the values of the even intergers doubbled */
const nums  = [1, 2, 3, 4, 5, 6]
const leaveOddsDoubleEvens = array => {
    const res = [];
  
    const process = arr => {
      if (!arr.length) return;
  
      const curr = arr[0];
  
      if (curr % 2 === 0) res.push(curr * 2)
      else res.push(curr);
  
      arr.splice(0, 1);
      
      return process(arr)
    }
    process(array);
    return res;
  }
  
  console.log(leaveOddsDoubleEvens(nums))
  //[1, 4, 3, 8, 5, 12]