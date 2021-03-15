
const isPalindrome = (num) => {
    if (num < 0) return false;
    const revNum = Number(num.toString().split('').reverse().join(''));
    return num === revNum && true
};