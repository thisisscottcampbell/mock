//The for...in loop is used to loop through an object's properties.

//does key occur?
const obj = {
  odd: 1,
  even: 2,
  target: 5,
  random: 18
};

let targetOccurs = 0;
// ADD CODE HERE
for (let key in obj) {
  if (key === 'foundNum') {
    targetOccurs++;
  }
}

//does value occur

var obj = {
   "a": "test1",
   "b": "test2"
};

for (let k in obj) {
  if (obj[k] === "test1") {
      return true;
  }
}


//if key val is greater than or equal to two, push to new array
const obj = {
  odd: 1,
  even: 2,
  found: 5,
  random: 18
};
objArray = []
// for (let key in obj) {
//  if (obj[key] > 1) { 
//    objArray.push(obj[key]);
//  }
// }

// for (let key in obj) {
//   obj[key] > 1 ? objArray.push(obj[key]) : false
// }

for (let key in obj) {
  if (obj[key] > 1) objArray.push(obj[key]) 
}