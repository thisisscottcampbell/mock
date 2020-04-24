//use spread
const flatArray = [].concat(...array)

//use reduce
let flatArray = array.reduce((acc, item) => {
  return acc.concat(item);
});

//for loop

let flatArray = [];
for (let i = 0; i < array.length; ++i) {
  for (let j = 0; j < array[i].length; ++j)
    flatArray.push(array[i][j]);
}

//.flat()
let flatArray = array.flat(Infinity)