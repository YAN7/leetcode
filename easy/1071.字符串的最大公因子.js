/**
 * @url https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
	let isPrefix = true;
	let prefix = "";
	let result = [];
	let num = 0;
let index = 0;
	for (let i = 0; i < str1.length; i++) {
			if (!isPrefix) break;
			if (str1[i] === str2[i]) {
					prefix += str1[i];
					result.push(prefix);
			} else {
					isPrefix = false;
			}
	}
	for (let i = 0; i < result.length; i++) {
			if (str1.split(result[i]).some(a => a !== '') || str2.split(result[i]).some(a => a !== '')) {
					result.splice(i, 1);
					i -= 1;
			}
	}
	result.map((re, i) => {
		if (re.length >= num) {
				num = re.length;
				index = i;
		}
})
return result[index] || "";
};

/**
 * @description 附上最高赞js解法
 * @url https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/1071-zi-fu-chuan-de-zui-da-gong-yin-zi-by-wonderfu/
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
  return str1.substring(0, gcd(str1.length, str2.length))
};