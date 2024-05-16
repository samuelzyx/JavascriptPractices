function LargestRowColumn(strArr) {
    const rows = strArr.length;
    const cols = strArr[0].length;
  
    let maxSum = -Infinity;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const currentDigit = parseInt(strArr[i][j]);
        const nextRow = (i + currentDigit) % rows; 
        const nextCol = (j + currentDigit) % cols; 
  
        if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
          const nextDigit = parseInt(strArr[nextRow][nextCol]);
          const sum = currentDigit + nextDigit;
  
          if (sum < 10) {
            maxSum = Math.max(maxSum, sum);
          } else {
            const nextNextRow = (nextRow + sum[0]) % rows; 
            const nextNextCol = (nextCol + sum[1]) % cols;
  
            if (nextNextRow >= 0 && nextNextRow < rows && nextNextCol >= 0 && nextNextCol < cols) {
              maxSum = Math.max(maxSum, sum);
            }
          }
        }
      }
    }
  
    return maxSum;
  }