function stringOccurrences(text, word) {

    word = ` ${word} `;
    let indexOfSearched = text.indexOf(word);

    let counter = 0;
   while(indexOfSearched !== -1) {
    counter++;
    indexOfSearched = text.indexOf(word, indexOfSearched + 1);
   }

   if(text.startsWith(word.trim())) {
       counter++;
   }
    if(text.endsWith(word.trim())) {
        counter++;
    }
   
   
   
   
   return counter;



}

console.log(stringOccurrences("This is a word and it also is a sentence",
"is"));