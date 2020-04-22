/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0, result;
  for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
          result = nums[i];
          count++
      } else if (result === nums[i]) {
          count++;
      } else {
          count--;
      }
  }
  return result;
};