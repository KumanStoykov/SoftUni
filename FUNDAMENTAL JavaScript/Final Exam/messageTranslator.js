function messageTranslator(input) {

    let pattern = /[\!]([A-Z][a-z]{2,})[\!]:\[([A-Za-z]{7,})\]/;
    let count = input.shift();    
    
    for(let i = 0; i < count; i++) {
        let match =  pattern.exec(input[i])
        
        if(match) {
            let chars = [];
            let send = match[1];
            let toTranslate = match[2].split("").forEach(el => {
                el = el.charCodeAt(0);
                chars.push(el);
            })
            console.log(`${send}: ${chars.join(" ")}`);

        } else {
            console.log("The message is invalid");
        }
    }
}

messageTranslator((["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"
]));