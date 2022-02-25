function rightPlace(toReplace, symbol, toCompare) {

    let finalText = "";

    for (let index = 0; index < toReplace.length; index++) {
        if (toReplace[index] === "_") {
            finalText += symbol;
        } else {
            finalText += toReplace[index];
        }
    }
    console.log(finalText === toCompare ?
        "Matched" :
        " Not Matched");

}
rightPlace('Str_ng', 'i', 'String');