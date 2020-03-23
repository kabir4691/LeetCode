/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
      const sum = digits[i] + carry;
      if (sum <= 9) {
          digits[i] = sum;
          return digits;
      }
      digits[i] = 0;
      carry = sum - 9;
  }
  return [carry].concat(digits);
};