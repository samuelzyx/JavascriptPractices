function QuestionsMarks(str) { 
  let foundPair = false;
  let digit1 = null;
  let digit2 = null;
  let questionMarksCount = 0;
  
  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      if (!isNaN(char)) { // If char is a digit
          if (digit1 === null) {
              digit1 = parseInt(char);
          } else {
              digit2 = parseInt(char);
              if (digit1 + digit2 === 10) {
                  if (questionMarksCount < 3) {
                      return false;
                  }
                  foundPair = true;
              }
              digit1 = digit2;
              digit2 = null;
              questionMarksCount = 0;
          }
      } else if (char === '?') {
          questionMarksCount++;
      }
  }
  
  return foundPair;
}
   
// keep this function call here 
console.log(QuestionsMarks(readline()));