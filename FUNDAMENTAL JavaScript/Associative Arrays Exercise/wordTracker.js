function wordTracker(input) {

    let neededWords = {};

    let searshWords = input.shift()
                           .split(' ')
                           .forEach(words => {
                               neededWords [words] = 0;
                           });
                           
    input.forEach(w => {
        if(neededWords.hasOwnProperty(w)) {
            neededWords[w]++;
        }
    });

    return Object.keys(neededWords)
    .sort((a, b) => neededWords[b] - neededWords[a])
    .forEach(w =>{
        console.log(`${w} - ${neededWords[w]}`)
    })
}

console.log(wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]));