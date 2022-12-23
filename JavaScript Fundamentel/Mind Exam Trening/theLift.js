function theLift(input) {
 
    let ppl = Number(input.shift());
    let wagons = input.shift().split(' ');
    let wagonSpaceCount = 0;
 
    for (let i = 0; i < wagons.length; i++) {
 
        let currWagon = Number(wagons[i]);
        if (currWagon < 4) {
            if (ppl >= 4) {
 
                if (currWagon != 0) {
                    ppl -= (4 - currWagon);
                    currWagon = 4;
                    wagons[i] = currWagon;
                    emptySpots = false;
                } else {
                    currWagon = 4;
                    ppl -= currWagon;
                    wagons[i] = currWagon;
                }
 
            } else {
                currWagon += ppl;
                ppl = 0;
                wagons[i] = currWagon;
                emptySpots = true;
            }
        }
    }
    if (ppl != 0) {
        console.log(`There isn't enough space! ${ppl} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        for (let wagon of wagons) {
            
            if (wagon === 4) {
                wagonSpaceCount++;
            }
        }
        if (wagonSpaceCount != wagons.length) {
            console.log("The lift has empty spots!");
            console.log(`${wagons.join(' ')}`)
        } else {
            console.log(`${wagons.join(' ')}`)
        }
    }
}




// theLift([
//     "20",
//     "0 2 0"
// ]);
theLift([
    "16",
    "0 0 0 0 0"
   ]);

// theLift([
//     "20",
//     "0 0 0 0 0"
// ])