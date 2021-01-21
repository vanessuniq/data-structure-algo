/*
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
 */

/*
   solution:
   1- we will convert the number x to a string, 
   2 - spread the char to an array, reverse the array and transform the array back to string
   3- 
 */

const reverse = function(x) {
    const reverseX = [...Math.abs(x).toString()].reverse().join('');

    if (Number(reverseX) > Math.pow(2, 31)) return 0
    if (x < 0) return -Number(reverseX);

    return Number(reverseX)
};