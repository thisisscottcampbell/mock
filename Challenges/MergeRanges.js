/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

const mergeRanges = intervals => {
    const ints = intervals.sort((a, b) => a[0] - b[0]);

    const ranges = [];
    let newRangeCheck;
  
    for (let i = 0; i < ints.length; i+= 1) {
  
        const curr = ints[i];
        let next;
        const currCheck = curr[1];
        let nextCheck;
        let lastRange = ranges.length > 0 ? ranges[ranges.length - 1] : [];
   
        if (ints[i + 1]) next = ints[i + 1];
        if (next) nextCheck = next[0];
      
//      //last subb range array: 
        if (i === ints.length - 1) {
          
            if (lastRange.length === 1) {
                const endRange = curr[1];
                lastRange.push(endRange)
            }
            else ranges.push(curr);
        }    
  
//       //either start a new range, or push sub range array:
        if (ranges.length < 1) {
            if (currCheck < nextCheck) ranges.push(curr);
  
            if (currCheck >= nextCheck) {
                const rangeStart = [curr[0]];
                newRangeCheck = currCheck;
                ranges.push(rangeStart);
            }
        }
  
  
//       //either starting a new range, or push sub range array
        if (lastRange.length === 2) {
            if (currCheck < nextCheck) ranges.push(curr);
  
            if (currCheck >= nextCheck) {
                const newRange = [curr[0]];
                newRangeCheck = currCheck;
                ranges.push(newRange);
            }
        }
  
//     //either resolving an unresolved merged range, or extending
        if (lastRange.length === 1) {
  
            if (newRangeCheck < curr[1]) {
  
                const endRange = curr[1];
                lastRange.push(endRange);
        
                newRangeCheck = undefined;
            }
        }
    };
    
      return ranges
  };
  
  intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
  console.log(mergeRanges(intervals)) 
  //[[0, 1], [3, 8], [9, 12]])
  
  intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
  console.log(mergeRanges(intervals))
  //[[1, 6], [8, 10], [15, 18]])

