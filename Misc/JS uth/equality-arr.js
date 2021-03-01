const nums = [1, 2, 3];

nums === nums;
//true

nums === [1, 2, 3];
//false

const newNums = nums;

nums === newNums;
//true

nums.push('push on nums');

nums === newNums;
//true

nums;
//[1,2,3, 'push on nums']

newNums;
//[1,2,3, 'push on nums']
