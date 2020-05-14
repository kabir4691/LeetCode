/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0;
  const array = Array.from({length: n}, item => true);
  let count = 0;
  for (let i = 2; i < n; i++) {
      if (array[i]) {
          count++;
          for (let j = i * i; j < n; j += i) {
              array[j] = false;
          }
      }
  }
  return count;
};