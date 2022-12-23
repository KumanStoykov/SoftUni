function solve(input) {
    let size = input[0];
    let ladybugs = input[1].split(" ");
    let positions = [];
    let command;
  
    for (let i = 0; i <= size - 1; i++) {
      if (ladybugs.includes(i.toString())) {
        positions.push(1);
      } else {
        positions.push(0);
      }
    }
  
    for (let j = 2; j <= input.length - 1; j++) {
      command = input[j].split(" ");
      let from = Number(command[0]);
      let direction = command[1];
      let step = Number(command[2]);
      if (positions[from] === 1) {
        positions[from] = 0;
        if (direction === "right") {
          for (let k = from + step; k <= 2147483647; k += step) {
            if (positions[k] === 0) {
              positions[k] = 1;
              break;
            } else if (positions[k] === 1) {
              continue;
            } else {
              break;
            }
          }
        } else {
          for (let k = from - step; k >= -2147483647; k -= step) {
            if (positions[k] === 0) {
              positions[k] = 1;
              break;
            } else if (positions[k] === 1) {
              continue;
            } else {
              break;
            }
          }
        }
      }
    }
  
    console.log(positions.join(' '));
  }

// ladybugs([3, '0 1',
//     '0 right 1',
//     '2 right 1'
// ]);


solve([3, '0 1 ',
    '0 right 1',
    
    '2 right 1'
]);


// solve([ 5, '3',
// '3 left 2',
// '1 left -2']);