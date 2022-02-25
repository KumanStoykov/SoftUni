function wildZoo(input) {

    let endCommand = input.pop();
    let animals = {};

    for (let line of input) {
        let [command, arg] = line.split(": ");

        if (command === "Add") {
            let [name, neededFood, area] = arg.split("-");
            neededFood = Number(neededFood);
            if (!animals.hasOwnProperty(name)) {
                animals[name] = {
                    neededFood,
                    area,
                }
            } else {
                animals[name].neededFood += neededFood;
            }

        } else if (command === "Feed") {
            let [name, food] = arg.split("-");
            food = Number(food);

            if (animals.hasOwnProperty(name)) {
                animals[name].neededFood -= food;
                if (animals[name].neededFood < 1) {
                    console.log(`${name} was successfully fed`);
                    delete animals[name];
                }
            }
        }
    }
    let areaObj = {};
    Object.entries(animals).forEach(el => {
        if (!areaObj.hasOwnProperty(el[1].area)) {
            areaObj[el[1].area] = 1;

        } else {
            areaObj[el[1].area] += 1;
        }
    });
    let sortedArea = Object.entries(areaObj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let sortedAnimals = Object.entries(animals).sort((a, b) => b[1].neededFood - a[1].neededFood || a[0].localeCompare(b[0]));

    console.log("Animals:");
    sortedAnimals.forEach(animal => console.log(`${animal[0]} -> ${animal[1].neededFood}g`));
    console.log("Areas with hungry animals:");
    sortedArea.forEach(info => console.log(`${info[0]}: ${info[1]}`));
}


wildZoo((["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3600",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]));