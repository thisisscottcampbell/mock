//DEFINITION
//return the first element that satisfies the test condition
  //Is not useful for finding is an element exists, but for finding an element that is 'something'
  //takes up to 3 params
    //element
    //index
    //the array itself

const cats = ['Felix', 'Tigger', 'Garfield', 'Sylvester', 'Felix'];

let cat = cats.find(element => element.length === 9);

console.log(cat)
//returns: 'Garfield' ... and only Garfield even though Sylvester is also 9

