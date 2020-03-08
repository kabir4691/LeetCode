/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    let stringRowArr = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        stringRowArr.push([]);
    }
    let currentRow = 0;
    let navigateDown = false;
    
    for (let i = 0; i < s.length; i++) {
        stringRowArr[currentRow].push(s[i]);
        if (currentRow == 0 || currentRow == stringRowArr.length - 1) navigateDown = !navigateDown;
        currentRow += navigateDown ? 1 : -1;
    }
    
    return stringRowArr.reduce((acc1, row) => {
        return acc1 + row.reduce((acc2, char) => acc2 + char, "");
    }, "");
};