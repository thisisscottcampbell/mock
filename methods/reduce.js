//RETURNS A VALUE
//accepts a callback function and an optional second parameter
//iterates through an array
//runs a callback function on each value in the array
//the first parameter to the callback is either a., the first value in the array or b., the optional second parameter
// the first parameter to the callback is often called "accumulatoar"
//the returned value from the callback becomes the new value of the accumulator at each iteration
// *** whatever is returned from the callback function becomes the new value of the accumulator
// *** so acc is what we return


// array.reduce(accumulator, nextValue, index, array) {
  //callback functionality
// }, optional second param)


//acc = first value in the array or optional second param
//nextValue = second value in the array or first if the optional second param is passed

//get total
const sum = nums.reduce((acc, next) => {
  return acc + next
}, /*opt*/)

const arrayOfNames = [ 'player1', 'player2', 'player3' ]
names.reduce((acc, next) =>{
  return acc += '' next;
}, 'The team members are')

//returns, 'The team members are player1 player2 player3'


//check dupes, or count occurences by created obj ... TALLY

const array = [5,4,1,4,5]

array.reduce((acc, next) =>{
  if(next in acc) {
    acc[next]++;
  } else {
    acc[next] = 1
  }
  return acc
},{})

----OOORRRR-----

array.reduce((acc, next) => {
  acc[next] ? acc[next]++ : acc[next] = 1;
return acc
},{})

// returns {5:2, 4:2, 1:1}


//Count the values in an Array
const orders = [
  { amount: 25 },
  { amount: 25 },
  { amount: 25 },
  { amount: 25 }
]

const totalAmount = orders.reduce(sum, order => {
  console.log (sum, order)
  return sum + order.amount
}, 0)
// log 1: 0, 25
// log 2: 25, 50
// log 3: 50, 75
// log 4: 75, 100

//DEDUPE

deDupeArray.reduce((accArray, item) => {
  return accArray.includes(item) ? accArray : [...accArray, item]
}[])

//accArray; 
  //is my acculator and it is set to the inital value of an empty array; it is what I am reducing deDeupeArray to

//item: 
  //is the item in deDupeArray that I am evaluating

//accArray.includes(item)
  //this is the condition against which I am evaluating 'item': is 'item' in accArray?

// accArray : [...accArray, item]
  // if yes --> then accArray remains as is
  // if no --> then 'item' is added to accArray


  //GET HIGHEST VALUE IN ARRAY

  const nums = [1,2,4,5,6,7,3,9,3]

  array.reduce((acc, item) => {
    return acc > item ? acc : item
  })

//Flatten a multi-dimensional array

  let flatArray = array.reduce((acc, item) => {
    return acc.concat(item);
  });