function town(cityArr) {

    for (let data of cityArr) {
        let income = data.split(' | ')
        let town = income[0];
        let latitude = Number(income[1]);
        let longitude = Number(income[2]);

        let cityData = {
            town,
            latitude: (latitude).toFixed(2),
            longitude: (longitude).toFixed(2),
        };
        console.log(cityData);
    }


}

console.log(town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]));