/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let result = 0,
		l = 0,
		r = height.length - 1;
	while (l < r) {
		result = Math.max(result, Math.min(height[l], height[r]) * (r - l));
		if (height[l] <= height[r]) {
			l++;
		} else {
			r--;
		}
	}
	return result;
};
