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