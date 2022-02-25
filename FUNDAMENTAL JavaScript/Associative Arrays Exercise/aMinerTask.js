function aMinerTask(input) {

    let resuerceQunt = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];



        if (resuerceQunt.hasOwnProperty(resource)) {
            resuerceQunt[resource] = Number(resuerceQunt[resource]) + Number(quantity)
        }

        if (!Object.keys(resuerceQunt).includes(resource)) {

            resuerceQunt[resource] = Number(quantity);
        }


    }

    for (let [key, value] of Object.entries(resuerceQunt)) {
        console.log(`${key} -> ${value}`);
    }

}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15',
]);