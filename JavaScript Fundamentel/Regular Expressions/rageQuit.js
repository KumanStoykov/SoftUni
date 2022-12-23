function rageQuit(input) {

    let symbols = input[0].split(/[0-9]+/).filter(x => x !== "");
    let digits = input[0].split(/[^0-9]+/).filter(x => x !== "");
    
    let endString = [];

    for (let i = 0; i < symbols.length; i++) {

        let repeat = symbols[i].toUpperCase().repeat(digits[i]);
        endString.push(repeat);

    }
    endString = endString.filter(x => x !== "").join("");
    let specialSymbol = [... new Set(endString)];
 

        console.log(`Unique symbols used: ${specialSymbol.length}`);
        console.log(endString);


}

rageQuit([`e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`]);