function KUniqueCharacters(str) { 

    let k = parseInt(str[0]);
    let maxLength = 0;
    let longestSub = '';
  
    for(let i=1;i<=str.length-k;i++){
      const subs = str.substring(i);
      const uniqueChars = new Set();
      let length = 0;
  
      for(let j=0; j<subs.length;j++){
        uniqueChars.add(subs[j]);
        if(uniqueChars.size<=k){
          length++;
        } else{
          break;
        }
      }
  
      if(length>maxLength){
        maxLength = length;
        longestSub = subs.substring(0,length);
      }
    }
    return longestSub;
  }
     
  // keep this function call here 
  console.log(KUniqueCharacters(readline()));