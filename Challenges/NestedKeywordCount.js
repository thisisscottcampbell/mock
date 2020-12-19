/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {

    let count = 0;
  
    const counter = (arr, str) => {
      arr.forEach(el => {
          if (str === el) count += 1
          if (Array.isArray(el)) counter(el, str)
      });
    }
  
    counter(array, keyword);
    return count;
  };
  
  console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')) //2
  console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')) //3
  console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol'))//0

//   Given a nested array of arrays, return an array of keywords that appear the most
// often. Return multiple results within the array if there's a tie. Return the
// multiple in lexiographical (alphabetic) order.





const keywordMode = array => {

    const countObj = {

    };

    const freqObj = {
        keys: [],
        freq: 0
    }

    const frequency = arr => {
        arr.forEach(el => {

            if (Array.isArray(el)) frequency(el);

            else {
                
                //update countObj
                countObj[el] ? countObj[el] += 1 : countObj[el] = 1;

                //some block variables for readability
                const currKey = el;
                const currFreq = countObj[el];
                const highKeys = freqObj.keys;
                let highFreq = freqObj.freq;

                //for first element
                if (!highKeys) highKeys.push(currKey);

                //if new highest freq
                if (currFreq > highFreq) {
                    highKeys.splice(0,highKeys.length);
                    highKeys.push(currKey);
                    highFreq = currFreq;
                }

                //if same high freq
                if (currFreq === highFreq) highKeys.push(currKey)
            }
            console.log(freqObj.keys)
        })
    }

    frequency(array);


    return freqObj.keys.filter((el, i) => freqObj.keys.indexOf(el) === i);
};

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) //-> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) //-> ['cool']


// const keyWordMode = array => {
//     const tally = {};
//     let maxCount = 0;

//     const processs = arr => {
//         arr.forEach(val => {
//             if (Array.isArray(val)) {
//                 processs(val);
//                 return;
//             }

//             tally[val] = (tally[val] || 0) + 1;
//             maxCount = Math.max(maxCount, tally[val]);
//         })
//     }

//     processs(array);

//     const keywords = Object.keys(tally);
//     const results = keywords.filter(word => tally[word] === maxCount);
//     return results.sort();
// }