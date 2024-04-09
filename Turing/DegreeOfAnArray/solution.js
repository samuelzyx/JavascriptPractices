var solution = function(nums){
    // Initialize two hashmaps to store element counts, first occurrences, and last occurrences
    const countMap = {};
    const firstSeenMap = {};
    const lastSeenMap = {};

    let degree = 0; // To keep track of the maximum frequency

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Update count for the current element
        countMap[num] = (countMap[num] || 0) + 1;

        // Update firstSeen if the element hasn't been seen before
        if (!firstSeenMap.hasOwnProperty(num)) {
        firstSeenMap[num] = i;
        }

        // Update lastSeen for the current element
        lastSeenMap[num] = i;

        // Update degree if the current element has a higher frequency
        degree = Math.max(degree, countMap[num]);
    }

    let minLength = Infinity; // Initialize minimum length to positive infinity

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Check if the current element has the maximum frequency (degree)
        if (countMap[num] === degree) {
            // Calculate the subarray length using first and last occurrences
            minLength = Math.min(minLength, lastSeenMap[num] - firstSeenMap[num] + 1);
        }
    }

    // Return the minimum length of the subarray with the same degree as the entire array
    return minLength;
}

const k =  [1,2,2,3,1];
const output = solution(k);
console.log(output);