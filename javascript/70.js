/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let array = [];
  return waysOfClimbing(0, n, array);
};

const waysOfClimbing = (i, j, array) => {
  if (i > j) return 0;
  if (i === j) return 1;
  if (array[i] > 0) return array[i];
  array[i] = waysOfClimbing(i + 1, j, array) + waysOfClimbing(i + 2, j, array);
  return array[i];
}