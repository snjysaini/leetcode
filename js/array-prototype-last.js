// 2619. Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
// Array.prototype.last = function() {
//     return this.length > 0 ? this.pop() : -1
// };

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length-1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


// Test Cases
const arr = [1, 2, 3];
console.log(arr.last(), 3);