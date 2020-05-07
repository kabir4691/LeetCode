/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
      const absNum = Math.abs(nums[i]);
      if (nums[absNum - 1] > 0) nums[absNum - 1] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) result.push(i + 1);
  }
  return result;
};