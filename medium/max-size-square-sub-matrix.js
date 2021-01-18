/*
    Product Defects || HackerRank

    A quality agent is responsible for inspecting samples of finished products in the production line.
    Each sample contains defective and non-defective products represented by 1 and 0 respectively. 
    After placing the product samples sequentially in a two-dimensional square matrix of the product samples, 
    determine the size of the largest square area of defective products.

    complete the function largestArea that take a two dimensional array of integers as an input and return an integer
    representing the size of the largest square sub-matrix of defective products (fill with 1 only)
 */
/*
    Solution:
    1) check if the given matrix is empty, if it is, max = 0
    2) scan the elements in the first row of the matrix. if any element value is 1, set max to 1
    3) repeat step two for elemt in the first column
    4) walk the rest of the matrix starting at the second row and col (col =1 and row =1)
    5) if any elemt in the given position is 1, replace the value of the element at that position as follow:
    matrix(i,j)= Math.min(matrix(i−1,j),matrix(i−1,j−1),matrix(i,j−1)) +1.
    6) update max with the maximum value between max and matrix(i,j)
 */

const largestArea = function(matrix) {
    if (!matrix.length) return 0
    const row = matrix.length,
        col = matrix[0].length
    let max = 0
        //iterate over col, checking the value of each elemt in first row
    for (let i = 0; i < col; i++) {
        if (matrix[0][i] == 1) {
            max = 1
        }
    }
    // iterate over row 
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] == 1) {
            max = 1
        }
    }
    // walk the matrix
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] == 1) {
                let min = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1])
                matrix[i][j] = min + 1
                max = Math.max(max, min + 1)
            }
        }
    }
    return max

};