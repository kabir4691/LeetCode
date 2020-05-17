/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const expected = Math.floor((nums.length * (nums.length + 1)) / 2);
  const actual = nums.reduce((a, b) => a + b);
  return expected - actual;
};