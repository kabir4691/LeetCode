/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let set = new Set();
	let result = 0,
		i = 0,
		j = 0;
	while (i < s.length && j < s.length) {
		if (!set.has(s[j])) {
			set.add(s[j++]);
			result = Math.max(result, j - i);
		} else {
			set.delete(s[i++]);
		}
	}
	return result;
};
