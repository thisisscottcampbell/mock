const needleInHaystack = (string, substring) => {
    
    const len = substring.length;
    const genSlice = (idx, length) => string.slice(idx, idx + length);
    
    for (let i = 0; i < string.length; i++) {
        const curr = string[i];
        const firstChar = substring[0];

        let str = '';

        if (curr === firstChar) str += genSlice(i, len);

        if (str === substring) return true;
        
    }
    return false;
};

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {
    
    //assign length to a var
    const len = substring.length;

    //check if substring is only one character AND string has a wildcard OR contains substring
    if (len === 1 && string.split('').some(char => char === '_' || char === substring)) return true;

    //helper to generate str to compare
    const genSlice = (idx, length) => string.slice(idx, idx + length);

    //helper to handle wildcards 
    const handleWildcards = (modStr, refStr) => {
        let wildStr = '';

        for (let i = 0; i < modStr.length; i++) {
            const curr = modStr[i];

            curr === '_' ? wildStr += refStr[i] : wildStr += curr;
        }

        return wildStr
    }
    
    //iterate over string
    for (let i = 0; i < string.length; i++) {
        const curr = string[i];
        const firstChar = substring[0];

        //if we find the first character of substring in string
        if (curr === firstChar) {
            //get slice
            const str = genSlice(i, len);

            //handle wilds for substring
            const wildSub = handleWildcards(substring, str);

            //handle wilds for str
            const wildStr = handleWildcards(str, substring);

            //compare
            if (wildSub === wildStr) return true;
        }
    }
    return false;
};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };