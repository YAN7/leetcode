/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	const longestRisingArr = [];
	for (let i = 0; i < nums.length; i++) {
			if (longestRisingArr[longestRisingArr.length - 1] >= nums[i]) {
				longestRisingArr.pop();
			} 
			longestRisingArr.push(nums[i])
	}
	if (longestRisingArr.some((arr, index) => {
		if (index === 0) {
			return false;
		}
		return arr < longestRisingArr[index - 1];
	})) {
		return lengthOfLIS(longestRisingArr);
	} else {
		return longestRisingArr.length;
	}
};
const res = lengthOfLIS([1,3,6,7,9,4,10,5,6]);
console.log(123, res);

// @lc code=end

