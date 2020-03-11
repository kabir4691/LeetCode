/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	const map = roman => {
		switch (roman) {
			case "M":
				return 1000;
			case "CM":
				return 900;
			case "D":
				return 500;
			case "CD":
				return 400;
			case "C":
				return 100;
			case "XC":
				return 90;
			case "L":
				return 50;
			case "XL":
				return 40;
			case "X":
				return 10;
			case "IX":
				return 9;
			case "V":
				return 5;
			case "IV":
				return 4;
			case "I":
				return 1;
			default:
				return -1;
		}
	};

	let result = 0;
	for (let i = 0; i < s.length; i++) {
		const num1 = map(s[i]);
		if (i + 1 < s.length) {
			const num2 = map(s[i + 1]);
			if (num1 >= num2) {
				result += num1;
			} else {
				result += num2 - num1;
				i++;
			}
		} else {
			result += num1;
		}
	}
	return result;
};
