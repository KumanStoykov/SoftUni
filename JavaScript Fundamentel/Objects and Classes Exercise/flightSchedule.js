function flightSchedule(input) {

    let flightsObj = {};

    let flights = input[0].map(el => {
        let [code, city] = el.split(" ");
        flightsObj[code] = city
    });
    let flightStatusObj = {};

    let flightStatus = input[1].map(el => {
        let [code, city] = el.split(" ");
        flightStatusObj[code] = city;
    });
    let command = input[2].join("");

    if (command === "Cancelled") {
        let cancelledFly = {};
        for (let key of Object.keys(flightStatusObj)) {

            for (let keyTwo of Object.keys(flightsObj)) {

                if (key === keyTwo) {
                    cancelledFly[flightsObj[keyTwo]] = keyTwo;
                }
            }

        }
        let print = Object.keys(cancelledFly)
            .sort((a, b) => a.localeCompare(b))
            .map(key => {
                console.log(`{ Destination: '${key}', Status: 'Cancelled' }`);
            });
    } else if (command === "Ready to fly") {
        let readyToFly = {};
        let isFly = true;

        for (let key of Object.keys(flightsObj)) {

            for (let keyTwo of Object.keys(flightStatusObj)) {
                isFly = false;

                if (!flightStatusObj.hasOwnProperty(key)) {

                    readyToFly[key] = flightsObj[key];


                }

            }

        }
        if(isFly) {
            let print = Object.keys(flightsObj).map(key => {
                console.log(`{ Destination: '${flightsObj[key]}', Status: 'Ready to fly' }`);
            })

        } else {

            let print = Object.keys(readyToFly).map(key => {
                console.log(`{ Destination: '${readyToFly[key]}', Status: 'Ready to fly' }`);
            })
        }

    }

}



flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled',
        "SK323 Cancelled"
    ],
    ['Cancelled']
]);