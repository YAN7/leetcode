/**
 * @link https://leetcode-cn.com/problems/unique-number-of-occurrences/
 * @answernotes https://leetcode-cn.com/problems/unique-number-of-occurrences/solution/du-yi-wu-er-de-chu-xian-ci-shu-javascriptjie-fa-by/
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	// const result = {};
 const maps = new Map();
	for (let i = 0; i < arr.length; i++) {
			if (maps.has(arr[i])) {
					maps.set(arr[i], maps.get(arr[i]) + 1);
			} else {
				maps.set(arr[i], 1);
			}
	}
	const values = [...maps.values()];
	return values.length === [...new Set(values)].length;
};

uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]);