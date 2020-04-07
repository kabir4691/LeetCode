/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const array = [];
  for (let row = 0; row <= rowIndex; row++) {
      const subArr = [];
      for (let col = 0; col <= row; col++) {
          if (row === col || col === 0) {
              subArr[col] = 1;
          } else {
              subArr[col] = array[row - 1][col - 1] + array[row - 1][col]; 
          }
      }
      array.push(subArr);
  }
  return array[rowIndex];
};