function MovingMedian(arr) {
    var windowSize = arr[0], half = Math.floor(windowSize / 2), medians = [];
    arr = arr.splice(1);
    for (var i=0; i<arr.length; i++) {
        var subset = [];

        if (i < windowSize) subset = arr.slice(0, i + 1);
        else subset = arr.slice(i - windowSize + 1, i + 1);

        subset = subset.sort((a, b) => a - b);
        if (subset.length % 2 === 0) {
            medians.push(
                (subset[(subset.length / 2) - 1] + subset[subset.length / 2]) / 2);
        } else if (subset.length === 1) {
            medians.push(subset[0]);
        } else {
            medians.push(subset[(subset.length - 1) / 2]);
        }
    }
    return medians.join(); 
}

// keep this function call here 
console.log(MovingMedian(readline()));