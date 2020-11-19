const array = [4, 3, 9, 6, 23];
const divByTwo = {};
// ADD CODE HERE

//ADDING ARRAY ITEMS TO AN OBJECT

const jerseyNum = {};
const names = ['Brady', 'Bird', 'BobbyOrr', 'Teddy'];
const numbers = ['12', '33', '4', '9']

for (let i = 0; i < names.length ; i++) {
  const name = names[i];
  for (let j = 0; j < numbers.length; j++) {
  	const number = numbers[j];
    if (i === j) jerseyNum[name] = number
  } 
}
  //obj.key3 = "value3"
  //or
//obj["key3"] = "value3"