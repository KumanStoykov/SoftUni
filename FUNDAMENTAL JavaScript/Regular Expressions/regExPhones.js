function regExPhones(input) {

    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNumbers = [];

    let matches = pattern.exec(input);


    while(matches != null) {
       
        validNumbers.push(matches[0]);
        matches = pattern.exec(input);
    }

    console.log(validNumbers.join(', '));

}


regExPhones("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");