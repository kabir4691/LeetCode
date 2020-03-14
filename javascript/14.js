/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) return "";
	for (let i = 0; i < strs[0].length; i++) {
		let char = strs[0][i];
		for (let j = 1; j < strs.length; j++) {
			if (i == strs[j].length || strs[j].charAt(i) !== char) {
				return strs[0].slice(0, i);
			}
		}
	}
	return strs[0];
};
