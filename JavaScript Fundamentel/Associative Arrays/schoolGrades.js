function schoolGrades(inputArr) {

    let map = new Map();

    for (let string of inputArr) {
        let tokens = string.split(' ');
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);

        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades));
        }

    }

    let sorted = Array.from(map).sort((a, b) => average(a, b));

    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }
        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }

    

    for (let key of sorted) {
        console.log(`${key[0]}: ${key[1].join(', ')} `);
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);