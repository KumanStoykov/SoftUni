function netherRealms(input) {


    input = input.split(",").map(x => x.trim()).sort((a, b) => a.localeCompare(b));

    for (let info of input) {

        let alphaP = /[^0-9+\-*/\.]/g;
        let digitsP = /-?\d+\.?\d*/g;
        let damageMulDiv = /[\/\*]/g;;

        let matchAlpha = info.match(alphaP);
        let matchDigits = info.match(digitsP) ? info.match(digitsP).map(Number) : 0;
        let matchMulDiv = info.match(damageMulDiv);
        let health = 0;
        let damage = 0;

        if (matchAlpha) {
            let sum = 0;
            matchAlpha.forEach(w => {
                w = w.charCodeAt(0);
                sum += w;
            });
            health = sum;
        } else {
            health = 0
        }
        if (matchDigits) {
            let sum = matchDigits.reduce((a, b) => a += b);
            if (matchMulDiv) {

                matchMulDiv.forEach(el => {
                    if (el === "*") {
                        sum *= 2;
                    } else {
                        sum /= 2;
                    }
                });
            }
            damage = sum;
            
        } else {
            damage = 0;
        }
        console.log(`${info} - ${health} health, ${damage.toFixed(2)} damage`);
    }      
}


netherRealms("M3ph1st0**, Azazel");