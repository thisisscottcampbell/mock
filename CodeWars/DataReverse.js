// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

const dataReverse = (array) => {
    const data = [];
  
    const process = (arr, bytes = []) => {
        if (arr[0] === undefined) return;
  
        for (let i = arr.length - 1; i >= 0; i--) {
          const curr = arr[i];
          
          bytes.push(curr);
          if (bytes.length === 8) break;
        }
  
        const newArr = arr.slice(0, -8);
        data.push(bytes.reverse())
        return process(newArr)
    }
  
    process(array);
    
    return data.reduce((acc, curr) => acc.concat(curr))
    
    return finalData
  }