/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let result = '';
  while(n-- > 0) {
      result = String.fromCharCode((n % 26) + 65) + result;
      n = Math.floor(n / 26);
  }
  return result;
};