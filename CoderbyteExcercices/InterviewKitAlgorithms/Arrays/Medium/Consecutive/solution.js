function Consecutive(arr) { 

    arr.sort((a, b) => a - b);
  
    let result = 0;
  
    for(let i=1;i<arr.length;i++){
      let diff = arr[i]-arr[i-1]-1;
      result+=diff;
    }
    
    return result; 
  
  }
     
  // keep this function call here 
  console.log(Consecutive(readline()));