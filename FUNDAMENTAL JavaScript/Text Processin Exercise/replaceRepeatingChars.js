function replaceRepeatingChars(inputStr) {

    let charecter = '';

    for (let el of inputStr.split('')) {
        
        let lastCharacters = charecter.slice(-1);

        if(lastCharacters !== el) {
            charecter += el;
        }
    }

    console.log(charecter);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');