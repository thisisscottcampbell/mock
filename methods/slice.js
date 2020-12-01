//DEFINITION
//The slice() method returns the selected elements in an array
//it returns those "sliced out" elements as a new array

//can take two params ([sliceArray[whereToStartSlice]], [sliceArray[whereToEndSlice]])
//they are intergers ... index values
//whereToStateSlice is inclusive (i.e., will be included in operation)
//whereToEndSlice is exclusive (i.e., it will not be included in the operation...the slice will end on the index preceding the whereToEndSlice[i] )

const cats = ["Felix", "Garfield", "Tigger", "Sylvester", "Cheshire Cat"]

cats.slice(2)
//returns ["Tigger", "Sylvester", "Cheshire Cat"]

cats.slice(0, 2)
//returns ["Felix", "Garfield"] 

cats.slice(0,1)
//returns ["Felix"]

cats.slice(-1)
//return ["Cheshire Cat"]

function useSlice(array, startIncluded, endExcluded) {
  // your code here
  return array.slice(startIncluded, endExcluded)
}



//STRING STUFF



const str = 'POPzzzzEGG';


const egg = str.slice(-3);

console.log(egg);
//'EGG'
console.log(str);
//'POPzzzzEGG'

const noEgg = str.slice(0, -3)

console.log(noEgg);
//'POPzzzz'
console.log(str);
//'POPzzzzEGG'

const pop = str.slice(0, 3);

console.log(pop);
//'POP'
console.log(str);
//'POPzzzzEGG'

const noPop  = str.slice(3)

console.log(noPop);
//zzzzEGG
console.log(str);
//'POPzzzzEGG'