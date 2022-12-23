function estinationMapper(input) {



    let cityOne = /=(?<cityOne>[A-Z][a-zA-Z]{2,})=/g;
    let cityTwo = /\/(?<cityTwo>[A-Z][a-zA-Z]{2,})\//g;

    let matchesOne = cityOne.exec(input);
    let matchesTwo = cityTwo.exec(input);

    if (matchesOne && matchesTwo) {
        let cityOneMatch = matchesOne[1];
        let cityTwoMatch = matchesTwo[1];

        let travelPoints = cityOneMatch.length + cityTwoMatch.length;

        console.log(`Destinations: ${cityOneMatch}, ${cityTwoMatch}`);
        console.log(`Travel Points: ${travelPoints}`);
    } else {
        console.log(`Destinations:`);

        console.log(`Travel Points: ${0}`);

    }



}
estinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");