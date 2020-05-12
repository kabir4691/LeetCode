/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  let string, divideBy3, divideBy5;
  for (let i = 1; i <= n; i++) {
      divideBy3 = i % 3 === 0;
      divideBy5 = i % 5 === 0;
      if (!divideBy3 && !divideBy5) {
          result.push(String(i));
      } else {
          string = '';
          if (divideBy3) string += 'Fizz';
          if (divideBy5) string += 'Buzz';
          result.push(string);
      }
  }
  return result;
};