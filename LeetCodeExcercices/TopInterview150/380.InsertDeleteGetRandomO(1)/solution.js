
var RandomizedSet = function() {
    this.nums = [];
    this.valToIndex = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.valToIndex.hasOwnProperty(val)) return false;

    this.nums.push(val);
    this.valToIndex[val] = this.nums.length -1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.valToIndex.hasOwnProperty(val)) return false;

    const index = this.valToIndex[val];
    const lastVal = this.nums[this.nums.length-1];

    this.nums[index] = lastVal;
    this.nums[this.nums.length-1] = val;

    this.valToIndex[lastVal] = index;

    this.nums.pop();
    delete this.valToIndex[val];
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  if (this.nums.length === 0) return null;
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */