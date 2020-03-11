/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	const nums3 = [...nums1, nums2].sort();
	let half;
	if (nums3.length % 2 === 0) {
		half = nums3.length / 2;
		return (nums3[half - 1] + nums3[half]) / 2;
	} else {
		half = nums3.length / 2 - 0.5;
		return nums3[half];
	}
};
// @lc code=end

