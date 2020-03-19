/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;
  const limit = haystack.length - needle.length + 1;
  for (let i = 0; i < limit; i++) {
      if (haystack[i] !== needle[0]) continue;
      let j = i;
      for (let k = 0; k < needle.length; k++) {
          if (haystack[j] === needle[k]) {
              if (k === needle.length - 1) return i;
              j++;
          } else {
              break;
          }
      }
  }
  return -1;
};