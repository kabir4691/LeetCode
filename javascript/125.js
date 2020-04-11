/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0) return true;
  s = s.toLowerCase();
  
  const regex = /[a-zA-Z0-9]/;
  
  let i = 0, j = s.length - 1;
  while (i < j) {
      
      while(i < j && !(regex.test(s[i]))) i++;
      while(i < j && !(regex.test(s[j]))) j--;
      
      if (s[i] !== s[j]) return false;
      
      i++;
      j--;
  }
  
  return true;
};