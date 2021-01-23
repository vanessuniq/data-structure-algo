/*
    Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
 */

/*
   Solution

   -define an empty string variable that will save the common chars
   -if the arrary is empry, return the empty string
   -iterate over the char of the string with the shortest length in the array
   -at each iteration check if the substring is the start of every string in the array
   -if it is, set the previously define variable equal to the substring, if not continue
  - return the varialble defined
 */