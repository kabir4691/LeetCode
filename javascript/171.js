/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0;
  let multiplier = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      result += (s[i].charCodeAt(0) - 64) * Math.pow(26, multiplier++);
  }
  return result;
};v