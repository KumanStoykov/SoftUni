function memoryGame(input) {

    let sequence = input.shift().split(" ");
    let index = 0;

    while (sequence.length > 1 && input[0] !== "end") {
        let [firstIndex, secundIndex] = input.shift().split(" ");
        firstIndex = Number(firstIndex);
        secundIndex = Number(secundIndex);

        index++;

        if (firstIndex < 0 || firstIndex >= sequence.length || firstIndex === secundIndex  || secundIndex < 0 || secundIndex >= sequence.length) {
            let indexOfSequence = Math.trunc(sequence.length / 2);

           
                const symboly = '-' + index + 'a';
                sequence.splice(indexOfSequence, 0, symboly, symboly);

            

            console.log("Invalid input! Adding additional elements to the board");

        } else {

            let numOne = sequence[firstIndex];
            let numTwo = sequence[secundIndex];


            if (numOne === numTwo) {
                sequence.splice(firstIndex, 1);
                secundIndex = sequence.indexOf(numTwo);
                sequence.splice(secundIndex, 1);

                console.log(`Congrats! You have found matching elements - ${numOne}!`);
            } else if (numOne !== numTwo) {

                console.log("Try again!");

            }

        }
    }

    if (sequence.length === 0 || sequence.length === 1) {
        console.log(`You have won in ${index} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${sequence.join(" ")}`);
    }



}

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);



// else if (sequence[firstIndex] === sequence[secundIndex] && sequence.length !== 0) {
//     let lastElement = sequence[firstIndex].slice();

//     let removed = [sequence[firstIndex], sequence[secundIndex]];

//     sequence = sequence.filter((i) => !removed.includes(i));

//     console.log(`Congrats! You have found matching elements - ${lastElement}!`);