/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length === 0) return true;
	const map = new Map();
	map.set("(", ")");
	map.set("{", "}");
	map.set("[", "]");
	const stackArr = [];
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (stackArr.length === 0 || map.has(char)) {
			stackArr.push(char);
			continue;
		}
		const top = stackArr.pop();
		if (map.get(top) !== char) return false;
	}
	return stackArr.length === 0;
};
