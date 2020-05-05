/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  const dp = [0, nums[0]];
  for (let i = 1; i < nums.length; i++) {
      dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }
  return dp[nums.length];
};