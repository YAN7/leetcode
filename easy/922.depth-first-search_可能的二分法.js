/**
 * @lc app=leetcode.cn id=922 lang=javascript
 * @link https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * @highestVote https://leetcode.com/problems/sort-array-by-parity-ii/discuss/234994
 * [922] 可能的二分法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	const odd = [];
	const even = [];
	const re = new Array(A.length);
	A.map(a => a % 2 === 0 ? even.push(a) : odd.push(a));
	for (let i = 0; i < re.length; i++) {
		if (i % 2 === 0) {
			re[i] = even.pop();
		} else {
			re[i] = odd.pop();
		}
	}
	return re;
};

// 最高赞js解法
var sortArrayByParityII2 = function(A) {
	const result = new Array(A.length);
	for (let i = 0, even = 0, odd = 1; i < A.length; i++) {
		if (i % 2 === 0) {
			result[even] = A[i];
			even += 2;
		} else {
			result[odd] = A[i];
			odd += 2;
		}
	}
	return result;
}
// @lc code=end

