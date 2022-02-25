function emojiDetector(input) {

    input = input[0].toString();


    let digitPattern = /\d/g;
    let wordPattern = /(\:\:|\*\*)([A-Z][a-z]{2,})\1/g;

    let cool = Number(input.match(digitPattern).reduce((a, b) => a *= b));
    let validMatch  
    let coolsWords = [];
    
    while(validMatch = wordPattern.exec(input)) {
        coolsWords.push(validMatch[0]);
    }
    

   

    if(words !== 0) {

        console.log(`Cool threshold: ${cool}`);
        console.log(`${words.length} emojis found in the text. The cool ones are:`);
        coolsWords.forEach(words => console.log(words));
    }

    
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);