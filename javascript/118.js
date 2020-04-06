/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  if (numRows === 0) return result;
  for (let row = 0; row < numRows; row++) {
      let subArr = [];
      for (let col = 0; col <= row; col++) {
          if (row === col || col === 0) {
              subArr[col] = 1;
          } else {
              subArr[col] = result[row -1][col - 1] + result[row - 1][col];
          }
      }
      result.push(subArr);
  }
  return result;
};