function emojiDetector(input) {

    input = input[0].toString();


    let digitPattern = /\d/g;
    let wordPattern = /(\:\:|\*\*)[A-Z][a-z]{2,}\1/g;

    let cool = Number(input.match(digitPattern).reduce((a, b) => a *= b));
    let words = input.match(wordPattern)  ? input.match(wordPattern) : 0;
    
    let coolsWords = [];

    if(words !== 0) {

        words.forEach(w => {
            let sum = 0;
            let wordSplit = w.split(/[\*\:]+/);
             wordSplit[1].split("")
            .map(el => {
                el = el.charCodeAt(0); 
                return sum += el;
            })
            if(sum >= cool) {
                coolsWords.push(w);
            }
              
        });
    }

    if(words !== 0) {

        console.log(`Cool threshold: ${cool}`);
        console.log(`${words.length} emojis found in the text. The cool ones are:`);
        coolsWords.forEach(words => console.log(words));
    }

    
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);