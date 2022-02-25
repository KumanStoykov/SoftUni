// function censoredWords(text, word) {

//     let censored = text.replace(word,repeata(word));

//     while(censored.includes(word)) {
//         censored = censored.replace(word, repeata(word));
//     }

//     return censored;

//     function repeata(word) {
//         let inicial = ('*');


//         return inicial.repeat(word.length);
//     }

// }
// console.log(censoredWords("A small sentence with some words", "small"));


function censoredWords(text, word) {



    while (text.includes(word)) {
        
        text = text.replace(word, '*'.repeat(word.length));
        
    }
    
    return text;

}

console.log(censoredWords("A small sentence with some words", "small"));