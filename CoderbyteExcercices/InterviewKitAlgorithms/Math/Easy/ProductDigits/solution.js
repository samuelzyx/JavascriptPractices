function ProductDigits(num) { 

    let minDigits = Infinity;
    
    // Find the minimum number of digits needed to form the product
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // Calculate the number of digits in the product
        const productDigits = (i.toString() + (num / i).toString()).length;
        minDigits = Math.min(minDigits, productDigits);
      }
    }
    
    return minDigits;
  }
     
  // keep this function call here 
  console.log(ProductDigits(readline()));