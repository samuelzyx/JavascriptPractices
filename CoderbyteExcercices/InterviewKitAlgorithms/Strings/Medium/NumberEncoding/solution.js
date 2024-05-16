function NumberEncoding(str) { 

  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (alphabet.includes(char)) {
      const position = alphabet.indexOf(char) + 1;
      result += position;
    } else {
      result += char;
    }
  }
  
  return result;
}
     
  // keep this function call here 
  console.log(NumberEncoding(readline()));