function carFactory(objCar) {

    const finalObj = {model: objCar.model,
                    engine: {},
                    carriage: {},
                    wheels: [],
                };
                checkPower(objCar.power);
                checkTypeColor(objCar.carriage, objCar.color);
                checkWheels(objCar.wheelsize)
    
    function checkPower(power) {

        if(power <= 90) {
           return finalObj.engine = {power: 90, volume: 1800};

        } else if (power > 90 && power <= 120) {
           return finalObj.engine = { power: 120, volume: 2400 };
        } else if (power > 120) {
           return finalObj.engine = { power: 200, volume: 3500 };
        }
    }
    function checkTypeColor(type , color) {
        return finalObj.carriage = { type: type, color: color};
    }
    function checkWheels(wheels) {
        if(wheels % 2 === 0) {
            wheels = Number(wheels) - 1;
            finalObj.wheels.push(wheels, wheels, wheels, wheels);

        } else {
            finalObj.wheels.push(wheels, wheels, wheels, wheels);
        }
    }

    return finalObj

}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));