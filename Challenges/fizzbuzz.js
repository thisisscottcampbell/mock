
// Write a function that returns an array containing the numbers 1 to NUM.

// Put "fizz" in place of numbers divisble by 3 but not by 5,
// "buzz" in place of numbers divisble by 5 but not by 3,
// and "fizzbuzz" in place of numbers divisble by both 3 and 5.

// fizzbuzz(16);
// -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
// 11, 'fizz', 13, 14, 'fizzbuzz', 16]



const fizzbuzz = num => { 
  const pusher = (input, arr) => arr.push(input) 
  const fbArr = new Array();
  

  let curr = 1;
  while (num >= curr) {
      if (curr % 3 === 0 && curr % 5 === 0) pusher('fizzbuzz', fbArr);
      else if (curr % 3 === 0) pusher('fizz', fbArr);
      else if (curr % 5 === 0) pusher('buzz', fbArr);
      else pusher(curr, fbArr);

      curr++;
  }
  return fbArr;
};

//OR


const fizzbuzz = (num, fbArr = [] ) => {
  let currStr = '';

  if (num === 0) return fbArr;

  if (num % 3 === 0) currStr += 'fizz';
  if (num % 5 === 0) currStr += 'buzz';
  currStr ? fbArr.push(currStr) : fbArr.push(num);
 
  return fizzbuzz(--num, fbArr)
}

console.log(fizzbuzz(22))