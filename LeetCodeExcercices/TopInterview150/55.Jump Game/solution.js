/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var currentIndex = 0;
    var currentValue = 0;
    
    while(currentIndex<nums.length){
        if(currentIndex==(nums.length-1)){
            return true;
        }
        currentValue = nums[currentIndex];
        if(currentValue == 0){
            return false;
        }
        currentIndex = currentIndex + currentValue;
    }
    return true;
};  