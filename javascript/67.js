/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = '';
  let carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >=0 || j >= 0 || carry === 1; i--, j--) {
      if (i >= 0) carry += Number(a[i]);
      if (j >= 0) carry += Number(b[j]);
      result = carry % 2 + result;
      carry = Math.floor(carry / 2);
  }
  return result;
};