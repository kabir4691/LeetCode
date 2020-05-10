/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const object = {};
  for (let i = 0; i < nums.length; i++) {
      if (object[nums[i]]) return true;
      object[nums[i]] = 1;
  }
  return false;
};