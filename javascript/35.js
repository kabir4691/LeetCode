/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const numsLength = nums.length;
  if (target > nums[numsLength - 1]) return numsLength;
  if (target <= nums[0]) return 0;
  let l = 0, r = numsLength - 1, mid;
  while (l < r) {
      mid = Math.floor((l + r) / 2);
      if (target > nums[mid]) {
          l = mid + 1;
      } else {
          r = mid;
      }
  }
  return l;
};