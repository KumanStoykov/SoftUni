function movingTarget(input) {

    let targets = input.shift().split(" ").map(Number);
    let end = input.pop();

    for (let info of input) {
        let [command, ...arg] = info.split(" ");
        
        let targetsL = targets.length - 1;

        if(command === "Shoot") {
            let [index, power] = arg.map(Number);

            if(targetsL >= index && index >= 0) {
                let targetValue = targets[index] - power;
                if(targetValue <= 0) {
                    targets.splice(index, 1);
                } else {
                    targets[index] -= power;
                }
            }
        } else if (command === "Add") {
            let [index, value] = arg.map(Number);

            if(targetsL >= index && index >= 0) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === "Strike") {
            let [index, radius] = arg.map(Number);
            let startIndex = index - radius;
            let endIndex = index + radius;
            let strike = radius + radius + 1

            if(startIndex >= 0 && endIndex <= targetsL) {
                targets.splice(startIndex, strike);
            } else {
                console.log("Strike missed!");
            }

        }
        
    }
    console.log(targets.join("|"));


}

movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]));

// movingTarget(["1 2 3 4 5",
// "Strike 0 1",
// "End"]);