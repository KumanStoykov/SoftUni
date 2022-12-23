function needForSpeed(input) {

    let countOfCars = input.shift();
    let commands = input.slice(countOfCars, input.length);
    let cars = {};
    for(let i = 0; i < countOfCars; i++) {
        let [model, mileage, fuel] = input[i].split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);       
        
        cars[model] = {
            mileage,
            fuel
        }
    }

    let commandParser = {
        "Drive": (model, distance, fuel)=>{
            distance = Number(distance);
            fuel = Number(fuel);
            let testFuel = cars[model].fuel - fuel;

            if(testFuel >= 0) {
                console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                cars[model].mileage += distance;
                cars[model].fuel -= fuel;

            } else {
                console.log(`Not enough fuel to make that ride`);
            }
            if(cars[model].mileage >= 100000) {
                console.log(`Time to sell the ${model}!`);
                delete cars[model];
            }
        },
        "Refuel":(model, fuel)=>{
            fuel = Number(fuel);
            let testFuel = cars[model].fuel + fuel;
            let restFuel = testFuel - 75;
            if(testFuel > 75) {
                console.log(`${model} refueled with ${fuel - restFuel} liters`);
                cars[model].fuel = 75;
            } else{
                console.log(`${model} refueled with ${fuel} liters`);
                cars[model].fuel += fuel;
            }

        },
        "Revert":(model, kilometers)=> {
            kilometers = Number(kilometers);
            let testMileage = cars[model].mileage - kilometers;
            if(testMileage < 10000) {
                cars[model].mileage = 10000;

            } else {
                console.log(`${model} mileage decreased by ${kilometers} kilometers`);
                cars[model].mileage -= kilometers;
            }

        }
    }

    commands.forEach(line => {

        if(line !== "Stop") {
            let [command, model,...arg] = line.split(" : ");
            commandParser[command](model, ...arg);

        }
        
    });
    let sorted = Object.entries(cars).sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]));

    sorted.forEach(car => {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    })



}


needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]);