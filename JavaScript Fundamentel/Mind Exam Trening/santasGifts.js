function santaGifts(input) {

    let commandsCount = Number(input.shift());
    let houses = input.shift().split(" ").map(Number);
    let lastIndex = 0;
    let testIndex = 0;
    
    for(let info of input) {
        let[command, ...arg] = info.split(" ");
        let housesL = houses.length;
        testIndex = lastIndex;

        if(command === "Forward") {
            let [numberOfSteps] = arg.map(Number);
            testIndex += numberOfSteps;
            if(testIndex < housesL && testIndex >= 0) {
                lastIndex += numberOfSteps;
                houses.splice(lastIndex, 1);
            }
        } else if(command === "Back") {
            let [numberOfSteps] = arg.map(Number);
            testIndex -= numberOfSteps
            if(testIndex < housesL && testIndex >= 0) {
                lastIndex -= numberOfSteps;
                houses.splice(lastIndex, 1);
            }
        } else if(command === "Gift") {
            let [index, houseNumber] = arg.map(Number);
            if(index < housesL && index >= 0) {
                lastIndex = index;
                houses.splice(lastIndex, 0, houseNumber);
            }

        } else if (command === "Swap") {
            let [firstValue, secundValue] = arg.map(Number);
            let firstIndex = houses.indexOf(firstValue);
            let secundIndex = houses.indexOf(secundValue);
            if(firstIndex >= 0 && secundIndex < housesL) {

                [houses[firstIndex],houses[secundIndex]] = [houses[secundIndex],houses[firstIndex]];
            }
            
        }

    }
    console.log(`Position: ${lastIndex}`);
    console.log(`${houses.join(", ")}`);



}



santaGifts(["5",
    "255 500 54 78 98 24 30 47 69 58",
    "Forward 1",
    "Swap 54 47",
    "Gift 1 20",
    "Back 1",
    "Forward 3"]);
// santaGifts(["6",
//     "50 40 25 63 78 54 66 77 24 87",
//     "Forward 4",
//     "Back 3",
//     "Forward 3",
//     "Gift 2 88",
//     "Swap 50 87",
//     "Forward 1"]);