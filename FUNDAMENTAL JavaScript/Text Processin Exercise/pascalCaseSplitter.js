function pascalCaseSplitter(inputStr) {

    let indexSeved = [];
    let splitInput = inputStr.split('');

    for (let index in splitInput) {
        let char = splitInput[index];
        let asciiValue = char.charCodeAt(0);

        if (asciiValue > 64 && asciiValue < 91) {
           indexSeved.push(Number(index));
           
        }
    }
    let words = [];

    for(let i = 0; i < indexSeved.length; i++) {
        words.push(inputStr.substring(indexSeved[i], indexSeved[i + 1]));
    }

    console.log(words.join(', '));

    

    
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');