function piccolo(input) {

    let lotParking = {};

    for (let carNumAndDi of input) {
        let [direction, carNum] = carNumAndDi.split(', ');

        if(direction === 'IN') {
            lotParking[carNum] = 1;
        } else if(direction === 'OUT'){
            delete lotParking[carNum];
        }
    }
    let result = Object.keys(lotParking)
    .sort((a, b) => a.localeCompare(b))
    .join('\n');

    
    return result ? result : 'Parking Lot is Empty';

}

console.log(piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
));