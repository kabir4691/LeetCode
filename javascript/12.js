/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let result = "";
	for (let i = 0; i < numerals.length; i++) {
		while (numerals[i] <= num) {
			result += romans[i];
			num -= numerals[i];
		}
	}
	return result;
};
