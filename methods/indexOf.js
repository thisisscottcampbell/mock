//Definition
  //The indexOf() method returns the first index at which a given element can be found in the array. 
    // **Will return -1 if it is not present

const cats = ['Garfield', 'Felix', 'Tigger', 'Sylvester', 'Felix'];

console.log(cats.indexOf('Felix'));
// expected output: 1

console.log(cats.indexOf('Cheshsire Cat'));
// expected output: -1

// looking for index 2; or, second instance of
console.log(cats.indexOf('Felix', 2))
// expected output: 4

//is this an index?
function indexOfString(string1, string2) {
  // your code here
  const index = string1.indexOf(string2) 
  return index ? index : -1
}