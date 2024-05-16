function ArithGeo(arr) { 
    let geo = true;
    let ari = true;
    let difAri = arr[1]-arr[0];
    let difGeo = arr[1]/arr[0];
  
    for(let i=2;i<arr.length;i++){
      if((arr[i]-arr[i-1])!=difAri){
        ari = false
      }
      if((arr[i]/arr[i-1])!=difGeo){
        geo = false
      }
    }
  
    if(geo){
      return "Geometric";
    }
  
    if(ari){
      return "Arithmetic";
    }
      
    // code goes here  
    if(!geo&&!ari){
      return -1; 
    }
  }
     
  // keep this function call here 
  console.log(ArithGeo(readline()));