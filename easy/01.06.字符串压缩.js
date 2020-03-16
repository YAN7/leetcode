/**
 * @link https://leetcode-cn.com/problems/compress-string-lcci/
 * @myAnswer https://leetcode-cn.com/problems/compress-string-lcci/solution/zi-fu-chuan-ya-suo-javascriptjie-fa-by-yan7/
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
	let count = 0;
	let result = '';
	for (let i = 0; i < S.length; i++) {
			count += 1;
			if (S[i] !== S[i + 1]) {
					result += `${S[i]}${count}`;
					count = 0;
			}
	}
	return result.length >= S.length ? S : result;
};