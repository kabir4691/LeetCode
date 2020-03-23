/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const split = s.split(/\s+/g).filter(word => word);
  return split.length < 1 ? 0 : split.pop().length;
};