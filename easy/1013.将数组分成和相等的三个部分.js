/**
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
 * @param {number[]} A
 * @return {boolean}
 * 
 */
var canThreePartsEqualSum = function(A) {
	const totalSum = A.reduce((x, y) => x + y);
	if ( totalSum % 3 !== 0) return false;
	const aver = totalSum / 3;
	let sum = 0;
	let flag = 0;
	for (let i = 0; i < A.length; i++) {
		sum += A[i];
		if (sum === aver) {
			if (flag === 2) {
				break;
			}
			sum = 0;
			flag += 1;
			A.splice(0, i + 1);
			i = -1;
		}
	}
	if (A.length === 0) return false;
	const last = A.reduce((x,y) => x+y);
	return last === aver;
};

/**
 * 官网高赞js解法
 * @url https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/solution/mei-ri-yi-ti-ep11-array-trisectionshu-zu-san-deng-/
 */

var canThreePartsEqualSum = function(A) {
	let sum = A.reduce((acc,cur)=>acc+cur) //sum数组之和
	let temp = 0   //temp累加
	let cnt = 0   //cnt计数
	for(let i=0;i<A.length;i++){
			temp += A[i]; 
			if(temp == sum/3){  
					cnt++   ;
					temp = 0;
			}
			if (cnt === 3) return true;
	}
	return false;
};

