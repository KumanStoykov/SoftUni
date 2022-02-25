function solve(input) {

    let splitInput = input.split(/\s+/gm);

    let results = 0;



    for (let el of splitInput) {

        let elLength = el.length;
        let before = el.substring(0, 1);
        let after = el.substring(elLength - 1);
        let digits = Number(el.substring(1, elLength - 1));
        let charBefore = before.charCodeAt(0);
        let charAfter = after.charCodeAt(0);

        let sumNum = digits;

        if (before) {
            if (charBefore > 64 && charBefore < 91) {
                let upperCaseNum = Number(charBefore) - 64;
                sumNum /= upperCaseNum;
            } else {
                let lowerCaseNum = Number(charBefore) - 96;
                sumNum *= lowerCaseNum;
            }
        }
        if (after) {
            if (charAfter > 64 && charAfter < 91) {
                let upperCaseNum = Number(charAfter) - 64;
                sumNum -= upperCaseNum;

            } else {
                let lowerCaseNum = Number(charAfter) - 96;
                sumNum += lowerCaseNum;
            }
        }
        results += sumNum;
    }



    console.log(results.toFixed(2));

}



solve(
    'P34562Z q2576f   H456z'
);