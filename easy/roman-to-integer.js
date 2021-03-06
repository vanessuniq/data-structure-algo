/*
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */

/*
   Solution:
   1- define an object roman storing the integer value for each roman letter
   2- initialize the integer to be return and set it to 0: let int = 0
   3- loop over each char of the iput
   4- knowing that the input will always be a valid roman number,
   we will check two adjacent char at the time: char at position i and char at position i+ 1
       if the value of the char at position i in the roman object is less than the value of char at 
       position i+1, add the difference of char at i +1 and char at i to the int variable
       else, add the value of char at i postion to the int variable.

   5 - return the int variable

 */

const romanToInt = function(s) {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let int = 0;

    for (let i = 0; i < s.length; i++) {
        const next = roman[s[i + 1]]
        const curr = roman[s[i]]
        if (next && next > curr) {
            int += (next - curr);
            i++
        } else {
            int += curr
        };


    }

    return int
};