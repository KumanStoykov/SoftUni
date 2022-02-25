function solve(input) {

    let gladiators = {};
    let i = 0;

    while (input[i] !== "Ave Cesar") {
        let [name, item, power] = input[i].split(" -> ");


        if (item !== undefined) {
            power = Number(power);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};

            }
            if (!gladiators[name].hasOwnProperty(item)) {
                gladiators[name][item] = power;

            }
            if (gladiators[name][item] < power) {
                gladiators[name][item] = power;
            }
        } else {
            let [firstName, secundName] = input[i].split(" vs ");

            if (gladiators.hasOwnProperty(firstName) && gladiators.hasOwnProperty(secundName)) {


                let keysGlaOne = Object.keys(gladiators[firstName]);
                let keysGlaTwo = Object.keys(gladiators[secundName]);
                let isHeat = includesItem(keysGlaOne, keysGlaTwo);

                if (isHeat) {
                    let sumFirst = Object.values(gladiators[firstName]).reduce((a, b) => a += b);
                    let sumSecund = Object.values(gladiators[secundName]).reduce((a, b) => a += b);
                    if (sumFirst > sumSecund) {
                        delete gladiators[secundName];

                    } else {
                        delete gladiators[firstName];
                    }
                }
            }
        }

        i++;
    }

    let sorted = sortedGladiators(gladiators);


    for (let key of sorted) {
        let sumPoints = Object.values(key[1]).reduce((a, b) => a += b);
        let kvpItem = Object.entries(key[1]).sort((a, b) => {

            if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        });

        console.log(`${[key[0]]}: ${sumPoints} skill`);
        kvpItem.forEach(el => console.log(`- ${el[0]} <!> ${el[1]}`));

    }

    function includesItem(keysGlaOne, keysGlaTwo) {
        for (let word of keysGlaOne) {
            for (let wordTwo of keysGlaTwo) {
                if (word === wordTwo) {
                    return true;
                }
            }
        }
    }

    function sortedGladiators(gladiators) {

        let sorted = Object.entries(gladiators).sort((a, b) => {
            let valuesReduceA = Object.values(a[1]).reduce((a, b) => a += b);
            let valuesReduceB = Object.values(b[1]).reduce((a, b) => a += b);
    
            if (valuesReduceA === valuesReduceB) {
                return a[0].localeCompare(b[0]);
            } else {
                return valuesReduceB - valuesReduceA;
    
            }
        });

        return sorted;
    }

}


solve([
    'Peter -> Duck -> 400',
    'Peter -> Hammer -> 180',
    'Peter -> Nucor -> 300',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
// solve(["Pesho -> BattleCry -> 200",
// "Pesho -> BattleC -> 250",
// "Gosho -> PowerPunch -> 300",
// "Stamat -> Duck -> 200",
// "Stamat -> Tiger -> 250",
// "Ave Cesar"]);