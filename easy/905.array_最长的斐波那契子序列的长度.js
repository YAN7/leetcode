/**
 * @lc app=leetcode.cn id=905 lang=javascript
 * @link https://leetcode-cn.com/problems/sort-array-by-parity/
 * @vote https://leetcode.com/problems/sort-array-by-parity/discuss/286940
 * [905] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	const odd = [];
	const even = [];
	A.map(a => a % 2 === 1 ? odd.push(a) : even.push(a));
	return [...even, ...odd];
};
// @lc code=end

