function arrayModifier(arrInput) {

    let modifierLine = arrInput.shift().split(" ").map(Number);


    for (let infoLine of arrInput) {
        let [command, firstIndex, secondIndex] = infoLine.split(" ");
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if (command === "swap") {
            [modifierLine[firstIndex], modifierLine[secondIndex]] = [modifierLine[secondIndex], modifierLine[firstIndex]];

        } else if (command === "multiply") {
            let resultMultiply = modifierLine[firstIndex] * modifierLine[secondIndex];
            modifierLine.splice(firstIndex, 1, resultMultiply);

        } else if (command === "decrease") {
            for (let num = 0; num < modifierLine.length; num++) {
                modifierLine.splice(num, 1, modifierLine[num] - 1);

            }
        } else if (command === "end") {
            break;
        }
    }

    console.log(modifierLine.join(", "));


}



arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'decrease',
    'multiply 2 1',
    'end'
]);