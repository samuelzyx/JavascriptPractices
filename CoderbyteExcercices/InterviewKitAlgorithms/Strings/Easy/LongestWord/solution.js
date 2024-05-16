function LongestWord(sen) { 
    var words = sen.split(' ');
    var maxLong = 0;
    var result = "";
  
    for(var i=0;i<words.length;i++){
      var wordWithSpecialChar = words[i].replace(/[^\w\s]/gi, '');
      if(wordWithSpecialChar.length>maxLong){
        result = wordWithSpecialChar;
        maxLong = wordWithSpecialChar.length;
      }
    }
  
    // code goes here  
    return result; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));