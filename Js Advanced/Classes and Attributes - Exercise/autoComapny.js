function autoCompany(input) {

    let allModels = {};

    input.map(line => {
        let [brand, model, producer] = line.split(' | ');
        producer = Number(producer);

        if(!allModels.hasOwnProperty(brand)) {
            allModels[brand] = {};
            allModels[brand][model] = producer;
        } else if (!allModels[brand].hasOwnProperty(model)){
            allModels[brand][model] = producer;
        } else {
            allModels[brand][model] += producer;
        }
    });
    Object.keys(allModels).map(key => {
        console.log(key);
        Object.entries(allModels[key]).map(entry => console.log(`###${entry[0]} -> ${entry[1]}`));
    });
}

autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);