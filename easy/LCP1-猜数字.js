
/**
 * @link https://leetcode-cn.com/problems/guess-numbers/
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    let num = 0;
    for (let i = 0; i < 3; i++) {
        if (guess[i] === answer[i]) num += 1;
    }
    return num;
};