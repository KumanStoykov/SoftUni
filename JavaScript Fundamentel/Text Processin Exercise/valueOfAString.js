function valueOfAString(input) {

    let text = input[0].split("");
    let possibleInput = input[1];
    let sumOfChar = 0;

    for (const el of text) {
        let char = el.charCodeAt();

        if(possibleInput === 'LOWERCASE') {
            if(char > 96 && char < 123) {
                sumOfChar += char;
            } 

        } else {
            if(char > 64 && char < 91) {
                sumOfChar += char;

            }
        }
        
    }
    console.log(`The total sum is: ${sumOfChar}`);




}


valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']);