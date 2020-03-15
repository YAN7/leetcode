/**
 * @link https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * @highestVote https://leetcode.com/problems/shortest-distance-to-a-character/discuss/511187
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 打砖块
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	const StoArr = S.split('');
	const strEsIndex = [];
	const result = new Array(StoArr.length);
	StoArr.map((s, i) => {
		if (s === C) {
			strEsIndex.push(i);
		}
	})
	for (let i = 0; i < StoArr.length; i++) {
		if (StoArr[i] === 'e') {
			result[i] = 0;
		} else {
			const as = strEsIndex.map(s => Math.abs(s - i));
			result[i] = Math.min(...as);
		}
	}
	return result;
};
shortestToChar('aaab', 'b');
// @lc code=end

