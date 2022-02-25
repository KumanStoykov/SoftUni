function starEnigma(input) {
    
    
    let attacked = [];
    let destroyed = [];
    let message = "";
    
    for (let row of input.slice(1)) {
        let keyPattern = /[star]/gmi;
        let match = row.match(keyPattern) ? row.match(keyPattern).length : 0;
        let strDiff = "";
        
        
         message = row.split("").map((c) => String.fromCharCode((c.charCodeAt(0) - match))).join("");
        
        let pattern = /@(?<planet>[A-Za-z]+)(?:[^@\-!:>]+)?:(?<population>[\d]+)(?:[^@\-!:>]+)?!(?<status>[A|D])!(?:[^@\-!:>]+)?->(?<soldier>[\d]+)/g
        let matchMsg = pattern.exec(message);
        if(matchMsg) {
            let{ planet, population, status, soldier} = matchMsg.groups;
            
            if(status === "A") {
                attacked.push(planet);
            }
            if(status === "D") {
                destroyed.push(planet);
            }
        }  
        
        
        
    }

    console.log(`Attacked planets: ${attacked.length}`);
    if(attacked.length > 0) {
        attacked
        .sort((a, b) => a.localeCompare(b))
        .forEach(el =>{
            console.log(`-> ${el}`);
        })
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if(destroyed.length > 0) {
        destroyed
        .sort((a,b) => a.localeCompare(b))
        .forEach(el => {
            console.log(`-> ${el}`);
        })
    }
}


starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR'
]);