/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
	if (x < 10) return true;

	let reverse = 0;
	while (x > reverse) {
		reverse = reverse * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return x === reverse || x === Math.floor(reverse / 10);
};
