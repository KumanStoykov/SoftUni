// function city(obj) {

//     let keys = Object.keys(obj);

//     for (let key of keys) {
//         console.log(`${key} -> ${obj[key]}`)
//     }

// }

function solving(city) {
    let entries = Object.entries(city);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}
solving({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);