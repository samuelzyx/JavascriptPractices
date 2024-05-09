function FindIntersection(strArr) { 
    var result = [];
  
    var firstArr = strArr[0].split(", ");
    var secondArr = strArr[1].split(", ");
  
    for(var i=0;i<firstArr.length;i++){
      for(var u=0;u<firstArr.length;u++){
        if(firstArr[i]===secondArr[u]){
          result = result.concat(firstArr[i]);
        }
      }
    }

    if(result.length<=0){
        return false;
    }
  
    // code goes here  
    return result; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));