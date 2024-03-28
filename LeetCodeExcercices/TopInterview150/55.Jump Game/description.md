55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 
Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105

Notes:

In test case No. 157 with 

input 
nums = [2,5,0,0] 

expected 
true 

Is not correct following the description and the examples that shows in the problem. Because after start in index[0] that is equals to 2 according the input array, and get the index[2] that is 0, 2+0 is not the last index of this array, it will continue trying to get index[2] so the result it will be false