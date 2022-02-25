function travelTime(listArr) {

    let destinationsList = {};

    for (let info of listArr) {

        let [country, town, cost] = info.split(' > ');

        if(!Object.keys(destinationsList).includes(country)) {
            destinationsList[country] = {};
        }

        let key = Object.keys(destinationsList[country]);

        if(!Object.keys(destinationsList[country]).includes(town)) {
            destinationsList[country][town] = Number(cost);
        }

        if(Number(cost) < destinationsList[country][town]) {
            destinationsList[country][town] = Number(cost);
        }

      
    }

    let sortedCountries = Object
    .entries(destinationsList)
    .sort((a, b) =>
        a[0].localeCompare(b[0])) ||
        Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y);
        

    

    for (let [country, city] of sortedCountries) {
        let townAsEntries = Object.entries(city).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townAsEntries.join(' ')}`);
    }

   


}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);