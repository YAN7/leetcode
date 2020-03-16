/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @link https://leetcode-cn.com/problems/longest-palindrome/
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
	let ss = s.split('');
	const ll = s.length;
	let result = 0;
	for (let i = 0; i < ss.length; i++) {
			const dulipIndex = ss.findIndex((a, index) => (a === ss[i] && index !== i));
			if (dulipIndex !== -1) {
					ss = ss.filter((t, ii) => (ii != dulipIndex && ii != i));
					result += 2;
					i = -1;
			}
	}
	return result + 1 >= ll ? result + 1 : result;
};
longestPalindrome("abccccdd");
// @lc code=end

// js 最

