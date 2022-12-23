function triplesOfLatinLetters(n) {

    n = Number(n);

    let start = 97;
    let end = 97 + n;

    for (let firstAscii = start; firstAscii < end; firstAscii++) {
        for (let secondAscii = start; secondAscii < end; secondAscii++) {
            for (let threeAscii = start; threeAscii < end; threeAscii++) {
                let firstLoter = String.fromCharCode(firstAscii);
                let secondLoter = String.fromCharCode(secondAscii);
                let threeLoter = String.fromCharCode(threeAscii);

                console.log(`${firstLoter}${secondLoter}${threeLoter}`);

            }

        }

    }


}

triplesOfLatinLetters(3)