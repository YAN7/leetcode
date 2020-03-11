/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const arr = [];
	const leftBracket = ['(', '[', '{'];
	const rightBracket = [')', ']', '}'];
	const obj = {
		'(': 0,
		'[': 1,
		'{': 2,
		'}': 3,
		']': 4,
		')': 5,
	};
	for (let i = 0; i < s.length; i++) {
			if (leftBracket.includes(s[i])) {
					arr.push(s[i]);
			} else {
				if (i === 0 || obj[arr[arr.length - 1]] + obj[s[i]] !== 5) {
					return false;
				} else {
					arr.pop();
				}
			}
	}
	return arr.length === 0;
};

isValid('');

// @lc code=end

