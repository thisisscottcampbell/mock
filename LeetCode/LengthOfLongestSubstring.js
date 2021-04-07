var lengthOfLongestSubstring = function(s) {
    const temp = [];
    let len = 0
  
    for (let char of s) {
  
      if (temp.some(el => el === char))  {
  
        const idx = temp.indexOf(char)
        temp.splice(0, idx + 1)
      }
  
      temp.push(char)
      
      len = len < temp.length ? temp.length : len
    }
    return len
};