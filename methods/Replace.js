String.replace(pattern, replacement)

//The str.replace() method 
    //1. returns a new string with 
    //2. some or all matches 'of a pattern' (what we are looking for) replaced by a replacement (what we are swapping in). 
    //3. The pattern can be a string or a RegExp, and //4. the replacement can be a string or a function to be called for each match. 
    //5. IF PATTERN IS A STR, only the first occurrence will be replaced



const str = 'God is a great god';

newStr = str.replace('God', 'FlyGod');

console.log(newStr);

//'FlyGod is a great god'