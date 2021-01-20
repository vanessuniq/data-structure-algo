/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

/*
   Solution:
   since we want the index of two elements witch sum = target,
   we basicaly need to loop over the array and search the diff of target and elemt at position i.

   we will need an object that keep track of visited element.

    1- define a map that will save the nums element and its respective index in a k,v pair
    2- loop over nums and search the diff of target and the elmt at position i
    3 - if that element is already a key of our map, return its index and the current i value of the loop
    4- else add the element and i value as the k,v pair to the map and continue

    Time and space complexity O(n)
 */

const twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }


};