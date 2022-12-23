function carWash(input) {

    let wash = 0;

    for (let commands of input) {

        if(commands === "soap") {

            wash += 10;

        } else if(commands === "water") {
            wash *= 1.20;

        } else if (commands === "vacuum cleaner") {
            wash *= 1.25;
        } else if (commands === "mud") {
            wash *= 0.90;
        }
        
    }

    console.log(`The car is ${wash.toFixed(2)}% clean.`);



}



carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);