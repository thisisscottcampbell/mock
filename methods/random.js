const array = [4, 3, 9, 6, 23];
const divByTwo = {};
// ADD CODE HERE

//Adding Array Items to Object
//write a for loop to iterate through array
for(let i = 0; i < array.length; i++) {
  let num = array[i];
  //write a conditional that adds an item of array to the obj divByTwo IFF that item % 2 === 0
  if(num % 2 === 0) divByTwo[num] = i
}