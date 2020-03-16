/**
 * @link https://leetcode-cn.com/problems/day-of-the-week/
 * @myAnswer https://leetcode-cn.com/problems/day-of-the-week/solution/yi-zhou-zhong-de-di-ji-tian-javascriptjie-fa-by-ya/
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
	const date = new Date(`${year}-${month}-${day}`);
	const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return weeks[date.getDay()];
};