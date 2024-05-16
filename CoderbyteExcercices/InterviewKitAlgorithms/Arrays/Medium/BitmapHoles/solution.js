function BitmapHoles(strArr) { 
    let holes = 0;
    const visited = new Array(strArr.length).fill(false).map(()=> new Array(strArr[0].length).fill(false));
  
    function dfs(row,col){
      if( row<0 
          || row >=strArr.length
          || col<0 
          || col >= strArr[0].length 
          || visited[row][col]
          || strArr[row][col]!=='0'){
        return;
      }
          
      visited[row][col] = true; 
      
      dfs(row -1,col);
      dfs(row +1,col);
      dfs(row,col-1);
      dfs(row,col+1);
    }
  
    for(let i=0;i<strArr.length;i++){
      for(let j=0;j<strArr[0].length;j++){
        if(!visited[i][j]
          && strArr[i][j]==='0'){
            dfs(i,j);
            holes++;
          }
      }
    }
  
    return holes; 
  
  }
     
  // keep this function call here 
  console.log(BitmapHoles(readline()));