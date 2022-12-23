function manOWar(input) {

    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
    let lassElement = input.pop(); 
    let isLoss = false;


    for (let el of input) {
        let [command, ...arg] = el.split(" ");

        let warShipL = warShip.length - 1;
        let pirateShipL = pirateShip.length - 1;

        if (command === "Fire") {
            let [index, damage] = arg.map(Number);

            if (warShipL >= index && index >= 0) {
                let damageSection = warShip[index] - damage;

                if (damageSection <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isLoss = true;
                    break;
                } else {
                    warShip[index] -= damage;
                }

            }
        } else if (command === "Defend") {
            let [startIndex, endIndex, damage] = arg.map(Number);

            if (pirateShipL >= startIndex && startIndex >= 0 && endIndex <= pirateShipL && endIndex >= 0) {
                for (let start = startIndex; start <= endIndex; start++) {

                    let damageSection = pirateShip[start] - damage;
                    

                    if (damageSection <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        isLoss = true;
                        break;
                    } else {
                        pirateShip[start] -= damage;
                    }
                }
            }
        } else if (command === "Repair") {
            let [index, health] = arg.map(Number);

            if (pirateShipL >= index && index >= 0) {
                let checkHealth = pirateShip[index] + health;

                if (checkHealth <= maxHealth) {
                    pirateShip[index] += health;
                } else {
                    pirateShip[index] = maxHealth;
                }

            }


        } else if (command === "Status") {

            let maxHealthPercent = maxHealth * 0.20;

            let needRepair = pirateShip.filter(el => {

                return el < maxHealthPercent;
            });
            if (needRepair.length > 0) {
                console.log(`${needRepair.length} sections need repair.`);

            }
        }

    }

    let pirateSum = pirateShip.reduce((acc, el) => {
        return acc += el;
    }, 0);
    let warSum = warShip.reduce((acc, el) => {
        return acc + el;
    }, 0);

    if(!isLoss) {

        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warSum}`);


    }

}

// manOWar(["2>3>4>5>2",
// "6>7>8>9>10>11",
// "20",
// "Status",
// "Fire 2 3",
// "Defend 0 4 11",
// "Repair 3 18",
// "Retire"]);

manOWar(["10>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 3",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 63",
"Status",
"Retire"]);
