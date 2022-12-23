function mirrorWords(input) {
    input = input[0];

    let pattern = /([\@|\#])([A-Za-z]{3,})\1([\@|\#])([A-Za-z]{3,})\3/mg;
    let words = [];
    let mirror = [];


    let match
    while (match = pattern.exec(input)) {
        let word = match[2];
        let revers = match[4].split("").reverse().join("");
        let tuple = [word, revers]

        if (revers === word) {
            mirror.push(`${word} <=> ${match[4]}`);
        }
        words.push(tuple);        
    }   
    
    if(words.length < 1) {
        console.log("No word pairs found!");
    } else {
        console.log(`${words.length} word pairs found!`);
    }

    if(mirror.length === 0) {
        console.log("No mirror words!");
    } else if (mirror.length > 0){
      console.log(`The mirror words are:`);
      console.log(mirror.join(", "));        
    }

}

mirrorWords([
    ''
    ]);