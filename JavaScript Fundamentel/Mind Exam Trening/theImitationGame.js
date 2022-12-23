function theImitationGame(input) {

    let encryptedWord = input.shift();

    while (input[0] !== "Decode") {
        let [command, firstEl, secundEl] = input.shift().split("|");


        if (command === "Move") {
            let moveSlice = encryptedWord.slice(0, firstEl);
            let newMove = encryptedWord.substring(moveSlice.length, encryptedWord.length) + moveSlice;
            encryptedWord = newMove;

        } else if (command === "Insert") {
            let addChar = encryptedWord.substring(0, firstEl) + secundEl + encryptedWord.substring(firstEl, encryptedWord.length);
            encryptedWord = addChar;

        } else if (command === "ChangeAll") {


            let replacement = replaceAll(firstEl, secundEl, encryptedWord)
            encryptedWord = replacement;
            //text.replace('_'.repeat(word.length), word);
        }
    }

    console.log(`The decrypted message is: ${encryptedWord}`);


    function replaceAll(firstEl, secundEl, text) {

        let buff = [];

        for (let char of text) {
            let replace = char.replace(firstEl, secundEl);
            buff.push(replace);
        }
        return buff.join("");

    }


}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);