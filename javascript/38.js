/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let string = "1";
  while(n-- > 1) string = getNext(string);
  return string;
};

const getNext = input => {
  const split = input.split('');
  let result = "";
  while (split.length > 0) {
      const letter = split.shift();
      let count = 1;
      while (split[0] === letter) split.shift(), count++;
      result += count + letter; 
  }
  return result;
}