//Populate a valid initial state of the board similar to the Candy Crush Saga game. //not sure how fill first part of board?
//The board consists of three different jewels (red, blue, green).
//The board can’t have 3 jewels in a row (vertical or horizontal) of the same color.
//Write a program that populates this board. No need to do anything else, just populate it.
//You can print the state of the board as text using print statements.
//To keep it simple, let’s assume that the board is 5x5 size, we can handle a variable-size board later.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function genRanCol(){
    let colorNumGenerated = getRandomInt(3);
      let colorGenerated;
      switch(colorNumGenerated) {
        case 0:
          colorGenerated = 'r'
          break;
        case 1:
          colorGenerated = 'b'
          break;
        default:
          colorGenerated = 'g'
          break;
      }
    return colorGenerated
  }
  
  function getOtherOption(opt){
    if(opt==="b"){
        return "g"
    }
    if(opt==="g"){
        return "b"
    }
    if(opt==="r"){
        return "g"
    }
  }
  
  let board = [
    ['0','0','0','0','0'],
    ['0','0','0','0','0'],
    ['0','0','0','0','0'],
    ['0','0','0','0','0'],
    ['0','0','0','0','0'],
  ];
  
  //Generate random values
  for(let x=0;x<board.length;x++){
    for(let y=0;y<board.length;y++){
      let colorGenerated = genRanCol()
      if(x>1){
        if(board[x-2][y]===colorGenerated
					&&board[x-1][y]===colorGenerated){
          colorGenerated = getOtherOption(colorGenerated)
        }
      }
      
      board[x][y] = colorGenerated;
      
      if(y>1){
        if(board[x][y-2]===colorGenerated
					&&board[x][y-1]===colorGenerated){
          colorGenerated = getOtherOption(colorGenerated)
        }
      }
      
      board[x][y] = colorGenerated;
    }
  }
  
console.log(board)

/*
[["g", "g", "r", "b", "b"], 
["r", "b", "r", "g", "b"], 
["g", "r", "g", "r", "r"], 
["r", "r", "g", "b", "r"], 
["b", "b", "g", "r", "b"]*/
