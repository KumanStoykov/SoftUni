function revealWords(searshingWords, templates) {

    
    searshingWords = searshingWords.split(', ');
    
    for (let words of searshingWords) {
        let repl = words.length;
        let repeat = '*'.repeat(repl);
        
        templates = templates.replace(repeat, words );
    }
    
    console.log(templates);

    
}

revealWords(' learning, great,',
'softuni is ***** place for ******** new programming languages'
);