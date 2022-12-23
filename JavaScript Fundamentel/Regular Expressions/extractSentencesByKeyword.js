function extractSentencesByKeyword(input) {

    let matchWord = input.shift();
    let pattern = new RegExp(`.*(${matchWord}) .*`);
    let text = input[0].split(/\.|\?|\!/);
    for (let line  of text) {
        let currentText = line.match(pattern) ? line.match(pattern)[0] : line.match(pattern);
        if(currentText !== null) {
            console.log(currentText.trim());
       }        
    }
}


extractSentencesByKeyword(["to",
    "Welcome to SoftUni! You will learn programming, algorithms, problem solving and software technologies. You need to allocate for study 20-30 hours weekly. Good luck! I am fan of Motorhead. To be or not to be - that is the question. TO DO OR NOT?"
    ]);