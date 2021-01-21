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

-2^31 <= x <= 2^31 - 1
 */

/*
   solution:
   1- we will convert the number x to a string, 
   2 - spread the char to an array, reverse the array and transform the array back to string
   3- because the number can be positive or negative, to avoid the negative sign being reverse, we need first need
   to work with the absolute value of x
   4- once we have the reverse value, first check if it meets the constrains: the reverse must also be a 32-bit integer
   that is reverse must be less than 2^31

   5- if the reverse number is not a 32-bit integer, return 0
   6- if the previous condition is met, return the negative of the reverse number if x is negative
   or the postive number if x is positive.
 */

const reverse = function(x) {
    const reverseX = [...Math.abs(x).toString()].reverse().join('');

    if (Number(reverseX) > Math.pow(2, 31)) return 0
    if (x < 0) return -Number(reverseX);

    return Number(reverseX)
};