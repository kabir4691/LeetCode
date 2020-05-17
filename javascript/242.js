/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1;
      obj[t[i]] = (obj[t[i]] || 0) - 1;
  }
  for (key in obj) {
      if (obj[key] !== 0) return false;
  }
  return true;
};