/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0;
  for (let i = 5; n / i >= 1; i *= 5) result += Math.floor(n / i);
  return result;
};