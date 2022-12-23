function plantDiscovery(input) {

    let countOfPLant = input.shift();
    let endCommand = input.pop();
    let plants = {};
    for (let i = 0; i < countOfPLant; i++) {
        let [plant, rarity] = input.shift().split("<->");

        plants[plant] = {
            rarity,
            rating: []
        };
    }

    for (let line of input) {
        let [command,arg] = line.split(": ");

        if(command === "Rate") {
            let [plant, rating] = arg.split(" - ");
            rating = Number(rating);
            if(plants.hasOwnProperty(plant)) {
                plants[plant].rating.push(rating);

            } else {
                console.log("error");
            }

        } else if(command === "Update") {
            let [plant, newRarity] = arg.split(" - ");
            if(plants.hasOwnProperty(plant)) {
                plants[plant].rarity = newRarity;
            } else {
                console.log("error");
            }

        } else if (command === "Reset") {
            let plant = arg;
            if(plants.hasOwnProperty(plant)) {
                plants[plant].rating.splice(0, );
            } else {
                console.log("error");
            }
        }
        
    }
    Object.values(plants).forEach(el => {
        let ratingL = el.rating.length;
        
        if(ratingL > 0) {
            let sum = el.rating.reduce((a, b) => a += b);
            let result = (sum / ratingL).toFixed(2);
            el.rating = result;
        } else {
            el.rating = (0).toFixed(2);
        }
    });
    let sorted = Object.entries(plants).sort((a,b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating);

    console.log(`Plants for the exhibition:`);
    sorted.forEach(line => {
        console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${line[1].rating}`);
    })

}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]));