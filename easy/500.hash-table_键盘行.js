/**
 * link https://leetcode-cn.com/problems/keyboard-row/
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 * @vote js最高分赞解法 https://leetcode.com/problems/keyboard-row/discuss/97867
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	const row1 = 'qwertyuiop';
	const row2 = 'asdfghjkl';
	const row3 = 'zxcvbnm';
	const isInOneRow = (word) => {
			const re = word.toLowerCase().split('');
			const r1 = re.every(r => row1.includes(r));
			const r2 = re.every(r => row2.includes(r));
			const r3 = re.every(r => row3.includes(r));
			return r1 || r2 || r3;
	};
	return words.filter(word => isInOneRow(word));
};
// @lc code=end

