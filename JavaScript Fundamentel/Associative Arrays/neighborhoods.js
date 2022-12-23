function neighborhoods(input) {
    let map = new Map();
    let streets = input[0].split(", ");

    for (let neighborhood of streets) {
        map.set(neighborhood, []);
    }

    for (let i = 1; i < input.length; i++) {
        let daten = input[i].split(' - ')
        let street = daten[0];
        let name = daten[1];

        if (streets.includes(street)) {
            map.get(street).push(name);
        }
    }


    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);
    



    for (let kvp of sorted) {
        let token = kvp[1].toString().split(' ');
        let names = token.toString().split(',');
    
        console.log(`${kvp[0]}: ${kvp[1].length}`);

        if (kvp[1].length > 0) {
            for (let el of names) {


                console.log(`--${el}`)
            }
        }
    }


}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Herald Street - Keity',
'Abbey Street - Liam',
'Bright Mews - Mark',
'Abbey Street - John']
);