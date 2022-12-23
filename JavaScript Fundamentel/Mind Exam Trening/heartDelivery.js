function heartDelivery(input) {

    let neighborhood = input.shift().split("@").map(Number);
    let info = input.shift();
    let indexSum = 0;

    while (info !== "Love!") {
        let [command, index] = info.split(" ");
        index = Number(index);
        
        indexSum += index

        if (neighborhood.length - 1 < indexSum) {
            indexSum = 0;
        }

        let streetValue = neighborhood[indexSum] - 2;
        
        if (command === "Jump") {
            if (streetValue === 0) {
                neighborhood[indexSum] = neighborhood[indexSum] - 2;
                console.log(`Place ${indexSum} has Valentine's day.`);


            } else if (streetValue > 0) {
                neighborhood[indexSum] = neighborhood[indexSum] - 2;


            } else if (neighborhood[indexSum] === 0) {
                console.log(`Place ${indexSum} already had Valentine's day.`);
            }
        }
        info = input.shift();  
    }
    
    console.log(`Cupid's last position was ${indexSum}.`);

    let filterIndex = neighborhood.filter((a) => a > 0);

    if (filterIndex.length > 0) {
        console.log(`Cupid has failed ${filterIndex.length} places.`);

    } else {
        console.log(`Mission was successful.`);
    }
}

// heartDelivery(["2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love! "]);
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);