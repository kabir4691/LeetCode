/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  if (x === 2) return 1;
  let l = 2, r = x, mid;
  while (l <= r) {
      mid = Math.floor(l + (r - l) / 2);
      let square = mid * mid;
      if (square === x) return mid;
      if (square < x) {
          l = mid + 1; 
      } else {
          r = mid - 1;
      }       
  }
  return r;
};