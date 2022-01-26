/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function diagonalAttack(arr) {
  let matrix = [];

  for (let row of arr) {
    let split = row.split(" ").map(Number);
    let rowArr = [];
    split.forEach((element) => {
      rowArr.push(element);
    });
    matrix.push(rowArr);
  }

  let leftRight = 0;
  let rightLeft = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (col === row) {
        leftRight += matrix[row][col];
      }
      if (col === matrix.length - 1 - col) {
        rightLeft += matrix[row][matrix.length - 1 - row];
      }
    }
  }

  if (leftRight === rightLeft) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (col !== row) {
          if (col === matrix.length - 1 - row) {
              continue;
          } else {
            matrix[row][col] = leftRight;
          }
        }
      }
    }

    return matrix.forEach((el) => console.log(el.join(" ")));
  }

  return matrix.forEach((el) => console.log(el.join(" ")));
}
console.log(
  diagonalAttack([
    "5 3 12 3 1",
    "11 4 23 2 5",
    "101 12 3 21 10",
    "1 4 5 2 2",
    "5 22 33 11 1",
  ])
);
