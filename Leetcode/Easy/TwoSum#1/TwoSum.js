// Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

// You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function TwoSum(nums, target) {
  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (counter[num2] >= 0) {
      return [counter[num2], i];
    }
    counter[num1] = i;
  }
}

console.log(TwoSum([2, 7, 11, 15], 9));
