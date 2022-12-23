function ladybugs(input) {

    let sizeOfField = input.shift();
    let indexesOfBugs = input.shift().split(" ").map(Number);
    let leftSide = -2147483647;
    let rightSide = 2147483647;  

    let bugs = []

    for (let i = 0; i < sizeOfField; i++) {

        if (indexesOfBugs.includes(i)) {
            bugs.push(1);
        } else {

            bugs.push(0);
        }

    }

    for (let info of input) {
        let [firstIndex, command, secundIndex] = info.split(" ");
        firstIndex = Number(firstIndex);
        secundIndex = Number(secundIndex);

        if(bugs[firstIndex] === 1) {
            bugs[firstIndex] = 0;
        } else if (bugs[firstIndex] === 0) {
            continue;
        }

        if (command === "left") {

            for (let i = firstIndex - secundIndex; i >= leftSide; i -= secundIndex) {
                if (bugs[i] === 1) {
                    continue;

                } else if (bugs[i] === 0 ) {
                    bugs[i] = 1;
                    break;
                } else {
                    break;
                }
            }

        } else if (command === "right") {

            for (let i = firstIndex + secundIndex; i <= rightSide; i += secundIndex) {
                if (bugs[i] === 1) {
                    continue;
                } else if (bugs[i] === 0) {
                    bugs[i] = 1;
                    break;
                } else {
                    break;
                }
            }

        }
    }

    console.log(bugs.join(" "));
}

// ladybugs([3, '0 1',
//     '0 right 1',
//     '2 right 1'
// ]);


ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1',]);


// ladybugs([5, '3',
//     '3 left 2',
//     '1 left -2'
// ]);