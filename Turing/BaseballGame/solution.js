
var nums = [];
var calPoins = function(ops){
    var result = 0;

    for(let x=0; x<ops.length; x++){
      switch(ops[x]){
          case "C":
              nums.length=nums.length-1;
          break;
          case "D":
              nums.push(nums[nums.length-1]*2)
          break;
          case "+":
              nums.push(nums[nums.length-1]+nums[nums.length-2]);
          break;
          default:
              nums.push(Number(ops[x]))
              console.log("Number");
              console.log("nums");
              console.log(nums);
          break;
      }
    }

    for(let i=0;i<nums.length;i++){
        result+=nums[i];
    }
    return result;
}

var ops = ["5","2","C","D","+"];
// var ops = ["5","-2","4","C","D","9","+","+"];

console.log(calPoins(ops));