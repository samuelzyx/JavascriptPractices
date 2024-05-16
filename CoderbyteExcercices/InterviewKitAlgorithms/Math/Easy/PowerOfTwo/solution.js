function PowersofTwo(num) { 
    // A number is a power of two if it is greater than 0 
    // and its binary representation has only one '1' bit.
    return num > 0 && (num & (num - 1)) === 0;
  
  }
     
  // keep this function call here 
  console.log(PowersofTwo(readline()));