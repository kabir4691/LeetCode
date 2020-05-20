/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let object = {};
  let i;
  for (i = 0; i < s.length; i++) {
      object[s[i]] = (object[s[i]] || 0) + 1;
  }
  let unique = null;
  for (i in object) {
      if (object[i] === 1) {
          unique = i;
          break;
      }
  }
  return unique === null ? -1 : s.indexOf(unique);
};