function shootForTheWin(input) {

    let targets = input.shift().split(" ").map(Number);

    let j = 0;

    let count = 0;

    while(input[j] !== "End") {

        let index = Number(input[j]);


        if(index < targets.length && targets[index] !== -1) {

            count++;

            let lastNum = Number(targets[index]);

            targets.splice(index, 1, -1);

            for (let i = 0; i < targets.length; i++) {
                let num = Number(targets[i]);
                if(lastNum < num && num !== -1){
                    targets[i] = num - lastNum;
                } else if(lastNum >= num && num !== -1) {
                    targets[i] = num + lastNum;
                }
            }
        }
         j++;
    }

    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);


}

shootForTheWin (["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);
