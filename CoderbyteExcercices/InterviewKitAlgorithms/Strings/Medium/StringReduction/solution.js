function StringReduction(str) { 
    while (true) {
          let reduced = false;
          for (let i = 0; i < str.length - 1; i++) {
            if (str[i] !== str[i + 1]) {
              const pair = str[i] + str[i + 1];
  
              switch(pair){
              case 'ab':
              case 'ba':
                str = str.slice(0, i) + 'c' + str.slice(i + 2);
                reduced = true;
                break;
              case 'bc':
              case 'cb':
                str = str.slice(0, i) + 'a' + str.slice(i + 2);
                reduced = true;
                break;
              case 'ac':
              case 'ca':
                str = str.slice(0, i) + 'b' + str.slice(i + 2);
                reduced = true;
                break;
              }
            }
          }
          
          if (!reduced) {
              break;
          }
    }
  
    return str.length;
  
  }
     
  // keep this function call here 
  console.log(StringReduction(readline()));