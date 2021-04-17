const twoSumClosest = (nums, target) => {
	let closest = { sum: 0, diff: Infinity };

	const process = (arr) => {
		if (!arr.length) return;
		const curr = arr.splice(0, 1)[0];

		let temp = 0;
		let currDiff = 0;

		arr.forEach((num) => {
			temp = num + curr;
			currDiff = Math.abs(target - temp);

			if (currDiff < closest.diff) {
				closest.diff = currDiff;
				closest.sum = temp;
			}
		});
		return process(arr);
	};

	process(nums);
	return closest.sum;
};

//OR

const twoSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  let [l, r] = [0, nums.length - 1];
	
  while (l < r) {
    const sum = nums[l] + nums[r];
    closestSum = Math.abs(sum - target) < Math.abs(closestSum - target) ? sum : closestSum;
    if (sum === target) return closestSum;
    sum < target ? l++ : r--;
  }
	
  return closestSum;
};

console.log(twoSumClosest([2, -3, -6, 7, 4], 3))
//4
console.log(twoSumClosest([2, -2, 1], 4))
//3
console.log(twoSumClosest([3, 1, 4, 3], 6))
//6
s
