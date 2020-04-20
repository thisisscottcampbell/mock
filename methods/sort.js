//DEFINITION
  //mutates OG array
    //so should slice()
  // rearranges an array based on the test provided
  // arr.sort((a,b) => test)
    //this is saying sort a before b
      //if returns 0: leave a before b
      //if return greater than 0: b before a

const nums = [1,8,5,7,2]

const upSort = nums.slice().sort((a,b) => a-b); //return: [1,2,5,7,8]
const downSort = nums.slice().sort((a,b) => b-a) //return: [8,7,5,2,1]

//without slice(), nums would be assigned the return value!