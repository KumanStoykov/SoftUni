function fancyBarcodes(input) {

    let count = Number(input.shift());
    let pattern = /[@|#]([A-Z][A-Za-z\d]{4,}[A-Z])[@|#]/g;

    for (let i = 0; i < count; i++) {
        let barcode = input[i];
        let exec = pattern.exec(barcode);

        
        if (exec) {
            let splitCode = exec[0].split("");
            if (splitCode[0] !== splitCode[splitCode.length - 1]) {
    
                let sum = "";
                exec[0].split("").map(el => {
                    let code = el.charCodeAt(0);
                    if (code > 47 && code < 58) {
                        return sum += el;
                    }
                })
                if (sum.length > 0) {
                    console.log(`Product group: ${sum}`);
                } else {
                    console.log(`Product group: 00`);
                }
            }else {
                console.log("Invalid barcode");
            }

        } else {
            console.log("Invalid barcode");
        }

    }


}

fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]));