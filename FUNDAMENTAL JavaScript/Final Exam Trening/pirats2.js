function pirates(input) {

    let cities = {};

    while (input[0] !== "Sail") {
        let [city, population, gold] = input.shift().split("||");
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                population,
                gold
            };
        } else {
            cities[city].population += population;
            cities[city].gold += gold;
        }
    }
    input.shift();
    input.pop();

    for (let info of input) {

        if (info.includes("Plunder")) {
            let [command, city, population, gold] = info.split("=>");
            population = Number(population);
            gold = Number(gold);

            let populationTest = cities[city].population -= population;
            let goldTest = cities[city].gold -= gold;


            cities[city].population = populationTest;
            cities[city].gold = goldTest;
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if(goldTest <= 0 || populationTest <= 0) {
                delete cities[city];
                console.log(`${city} has been wiped off the map!`);

            }



        } else {
            let [command, city, gold] = info.split("=>");
            gold = Number(gold);

            if (gold > 0) {
                cities[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);

            } else {
                console.log("Gold added cannot be a negative number!");
            }

        }

    }

    let sorted = Object.entries(cities).sort((a, b) => {
        let goldA = a[1].gold;
        let goldB = b[1].gold;
        let result = goldB - goldA;
        if (result === 0) {
            return a[0].localeCompare(b[0]);
        } else {
            return result;
        }
    });

    if (sorted.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");

    } else {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        sorted.forEach(el => console.log(`${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`));
    }






}

pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]));