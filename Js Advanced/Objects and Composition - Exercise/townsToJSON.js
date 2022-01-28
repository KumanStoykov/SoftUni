function townsToJSON(inputArr) {

    let currentInput = inputArr.slice(1);
    let towns = [];

    currentInput.forEach(lineInfo => { 
        let [splitTown, latitude, splitLongitude] = lineInfo.split(' | ');
        let town = splitTown.split('| ')[1];
        let longitude = splitLongitude.split(' |')[0];
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let obj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        }
        towns.push(obj);
        
    });


    return JSON.stringify(towns);



}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);