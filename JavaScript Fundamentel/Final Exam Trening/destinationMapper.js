function destinationMapper(input) {


    let pattern = /([=|\/])([A-Z][A-Za-z]{2,})\1/gm;
    let matches
    let destination = [];
    while (matches = pattern.exec(input)) {

        destination.push(matches[2]);
    }
    if (destination.length > 0) {
        console.log(`Destinations: ${destination.join(", ")}`);
        console.log(`Travel Points: ${destination.join("").length}`);


    } else {
        console.log(`Destinations:`);
        console.log("Travel Points: 0");
    }

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");