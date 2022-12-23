function treasureFinder(input) {

    let corresponding = input.shift().split(" ").map(Number);
    let decrypting = [];
    let counter = 0;
    
    while (input[0] !== "find") {
        let string = input.shift().split("");
        let CurrentStr = "";
        

        for (let i = 0; i < string.length; i++) {
            let charOfAscii = string[i].charCodeAt();
            let currentAscii = charOfAscii - corresponding[counter];
            let currentChar = String.fromCharCode(currentAscii);

            if(counter >= corresponding.length - 1) {
                CurrentStr += currentChar;
                counter = 0;
            } else {
                CurrentStr += currentChar;
                counter++;
            }   
        }
        counter = 0;
        decrypting.push(CurrentStr);
    }

    for (let line of decrypting) {
        let lineSplit = line.split("&");
        let codeSplit = lineSplit[2].split("<");
        let coordinates = codeSplit[1].slice(0,codeSplit[1].length - 1);
        let type = lineSplit[1];
        console.log(`Found ${type} at ${coordinates}`);
        
    }

}


treasureFinder(['1 4 2 5 3 2 1',
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
`tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC`,
`'stj)>34W68Z@`,
'find']
);