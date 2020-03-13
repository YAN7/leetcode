/**
 * @link https://leetcode-cn.com/problems/high-five/
 * @param {number[][]} items
 * @return {number[][]}
 * @description 直接利用数组API暴力解题。。。
 */
var highFive = function(items) {
	const ids = [... new Set(items.map(aa => aa[0]))];
	const scores = [];
	for (let i = 0; i < ids.length; i++) {
		let currItem = items.filter(item => item[0] === ids[i]);
		const score = currItem.map(aa => aa[1]).sort((a,b) => b - a);
		let prefix = score.slice(0, 5);
		let sco = prefix.reduce((a ,b) => a + b) / prefix.length;
		sco = Math.floor(sco);
		scores.push(sco);
	}
	const result = scores.map((s, i) => [i + 1, s]);
return result;
};

highFive([[1,84],[1,72],[1,47],[1,43],[1,78],[2,79],[2,4],[2,23],[2,88],[2,79],[3,75],[3,80],[3,38],[3,73],[3,4]]);