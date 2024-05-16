function MinWindowSubstring(strArr) { 
    const N = strArr[0];
    const K = strArr[1];
    
    // Create a map to store the frequency of characters in K
    const charCount = {};
    for (let char of K) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let minLength = Infinity;
    let minWindow = '';
    let left = 0;
    let count = K.length;
    
    // Use two pointers to create a sliding window
    for (let right = 0; right < N.length; right++) {
        if (charCount[N[right]] > 0) {
            count--;
        }
        // Decrease the frequency of characters in the window
        charCount[N[right]]--;
        
        // If all characters in K are found, try to minimize the window size
        while (count === 0) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = N.substring(left, right + 1);
            }
            // Increase the frequency of characters and adjust the window
            charCount[N[left]]++;
            if (charCount[N[left]] > 0) {
                count++;
            }
            left++;
        }
    }
    
    return minWindow;
}
   
// keep this function call here 
console.log(MinWindowSubstring(readline()));