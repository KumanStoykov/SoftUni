function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = [];
    let match = pattern.exec(input);

    while (match !== null) {
        validNames.push(match[0]);

        match = pattern.exec(input);
    }
    console.log(validNames.join(' '));
}


matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");