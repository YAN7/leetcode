/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) return '';
	const sar1Length = strs[0].length;
	let result = '';
	for (let i = 0; i < sar1Length; i++) {
		if (strs.every(str => str[i] === strs[0][i])) {
			result += strs[0][i];
		} else {
			return result;
		}
	}
	return result;
};
// @lc code=end

