function sequences(input) {

    let inputPars = [];
    input.map((input) => {
        inputPars.push(JSON.parse(input).sort((a, b) => b - a));
    });
    
    for (let i = 0; i < inputPars.length; i++) {
        for(let j = 0; j < inputPars.length; j++) {

            if(arrayEquals(inputPars[i], inputPars[j + 1]) && inputPars.length > 2 && i !== j + 1) {
                inputPars.splice(j + 1, 1);
            } else if (inputPars[0].length && inputPars[1].length) {
              let resultA =  inputPars[0].reduce((a, b) => a += b);
              let resultB =  inputPars[1].reduce((a, b) => a += b);

              if(resultA === resultB) {
                  inputPars.splice(0, 1);
              }

            }
        }
    }

    let sorted = inputPars.sort((a, b) => {
        return a.length === b.length || a.length - b.length;
    });

    for (let output of sorted) {
        console.log(`[${output.join(", ")}]`);
    }
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
}

console.log(sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13, 0]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]));

// console.log(sequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]));