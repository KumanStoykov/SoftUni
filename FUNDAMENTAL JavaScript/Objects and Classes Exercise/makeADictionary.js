function makeADictionary(termJson) {

    let termAndDif = {};

    for (let i = 0; i < termJson.length; i++) {
        let parsed = JSON.parse(termJson[i]);
        let entres = Object.entries(parsed)[0];
        termAndDif[entres[0]] = entres[1]
    }
    let sortedTern = {};
    for (let key of Object.keys(termAndDif).sort((a, b) => a.localeCompare(b))) {
        sortedTern[key] = termAndDif[key];
    }

    // for (let term in sortedTern) {
    //     if (sortedTern.hasOwnProperty(term)) {
    //         let definition = sortedTern[term];
    //         console.log(`Term: ${term} => Definition: ${definition}`);
    //     }

    // }

    for (const term in sortedTern) {
        console.log(`Term: ${term} => Definition: ${sortedTern[term]}`);
    }


}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);