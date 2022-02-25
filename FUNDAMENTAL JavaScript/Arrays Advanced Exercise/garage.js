function solve(input) {

    input = input.map(str => str.split(", "));

    let garageObj = {};
    let counter = 0;

    for (let info of input) {
        let garage = info[0].split(" - ")[0];

        if (!garageObj.hasOwnProperty(garage)) {
            garageObj[garage] = {};
            counter = 0;

        }
        garageObj[garage][counter] = {};

        for (let line of info) {
            let [key, value] = line.split(": ");
            let argKey = key.split(" - ");



            if (!isNaN(+argKey[0])) {
                garageObj[garage][counter][argKey[1]] = value

            } else {
                garageObj[garage][counter][key] = value;
            }
        }
        counter++;
    }

    let garageNumber = Object.entries(garageObj);

    for (let key of garageNumber) {
        console.log(`Garage № ${key[0]}`);
        let gar = Object.entries(key[1]);
        
        for (let line of gar) {
            let cars = Object.entries(line[1])
            let str = "";
            let concat = [];

            for (let car of cars) {
                str = `${car[0]} - ${car[1]}`
            concat.push(str);
                
            }

            console.log(`--- ${concat.join(", ")}`);
        }
    }

}


solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);