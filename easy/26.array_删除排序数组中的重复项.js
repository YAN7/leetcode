/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	const duli = [];
	for (let i = 0; i < nums.length; i++) {
		if (!duli.includes(nums[i])) {
			duli.push(nums[i]);
		} else {
			nums.splice(1, i);
			i -= 1;
		}
	}
	return duli.length;
};
// @lc code=end

/**
 * js高赞解法
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/248020
 */

var removeDuplicates = function(nums) {
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
			if (nums[j] != nums[i]) 
					nums[++i] = nums[j];
	}
	return ++i;
};

removeDuplicates([1,2,3,4]);

