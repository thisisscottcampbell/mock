/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? */

const twoSum = (arr, target) => { 

let isSum = false;

const process = (arr) => {
    if (arr[0] === undefined) return;

    const curr = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        const next = arr[i];
        if (curr + next === target) isSum = true;
    }

        arr.splice(0, 1);
        return process(arr)
    }

    process(arr);
    return isSum;

}
  
const nums = [2, 5, 11, 15]
console.log(twoSum(nums, 100));