function counterStrike(input) {

    let energie = Number(input.slice(0, 1));
    let inputL = input.length;
    let win = 0;

    for (let i = 1; i < inputL; i++) {
        
        if (input[i] === "End of battle") {
            console.log(`Won battles: ${win}. Energy left: ${energie}`);
            return;
        }
        
        
        input[i] = Number(input[i]);

        
        if (energie >= input[i]) {
            win++;
            energie -= input[i];
        } else {
            console.log(`Not enough energy! Game ends with ${win} won battles and ${energie} energy`);
            break;
        }

        if (win % 3 === 0) {
            energie += win;
        }

    }




}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10",
    "15",
    "20"
]);

// counterStrike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"]);