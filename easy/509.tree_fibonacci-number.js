/**
 * @lc app=leetcode.cn id=509 lang=javascript
 * @link https://leetcode-cn.com/problems/fibonacci-number/
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
	if ( N <= 1) return N;
	const result = new Array(N + 1);
	let n = 0;
	result[0] = 0;
	result[1] = 1;
	for (let i = 2; i < N; i++) {
			result[i] = result[i - 1] + result[i - 2];
			n = i;
	}
	return result[n];
};
// @lc code=end

