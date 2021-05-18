** PART 1 **

/*
Declare a variable 'myNums' and set it to an object.
On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
The other key will be 'randomNumber' and its value will be 12. */

const myNums = {
    favoriteNumber: 32,
    randomNumber: 12
}


/* Declare a variable 'randomNum' and set it to the value of the randomNumber key in th myNums object */
/* Decalre a variable 'faveNum' and set it to the value of the favoriteNumber key in the myNums object */

const random = myNums.randomNumber;
const favorite = myNums.favoriteNumber;


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

console.log(largestSwap(random));
//false
console.log(largesstSwap(favorite));
//true

** CLOSURE **

// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

const rollCall = array => {

  let callTracker = 0;
 
   const coveHandler = () => {
     const i = callTracker;
     if (!array[i]) return console.log('Everyone accounted for')
     callTracker += 1
     return console.log(array[i])
     
   }
   return coveHandler
 } 
 
 // /*** Uncomment these to check your work! ***/
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
 const callOne = rollCaller()
 const callTwo = rollCaller()
 const callThree = rollCaller()
 const callFour = rollCaller()
 console.log(callOne) // => 'Victoria'
 console.log(callTwo) // => 'Juan'
 console.log(callThree) // => 'Ruth'
 console.log(callFour) // => 'Everyone accounted for'

** RECURSION **

/* Declare a variable with the label 'nums' and assign it the value of whole intergers, 1 - 6.
Using recursion, write a function 'leaveOddsDoubleEvens' that takes an array of intergers as an input. This function will return an array of intergers that cotains all the odd values from the input array and the values of the even intergers doubbled */

const leaveOddsDoubleEvens = array => {
    const res = [];
  
    const process = arr => {
      if (!arr.length) return;
  
      const curr = arr[0];
  
      if (curr % 2 === 0) res.push(curr * 2)
      else res.push(curr);
  
      arr.splice(0, 1);
      console.log(arr)
      return process(arr)
    }
    process(array);
    return res;
  }
  
  console.log(leaveOddsDoubleEvens([1, 2, 3, 4, 5, 6]))
  //[1, 4, 3, 8, 5, 12]