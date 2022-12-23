function stringSubstring(word, text) {

    text = text.toLowerCase();
    let toLowerWord = word.toLowerCase();

    if (text.split(' ').includes(toLowerWord)) {
        console.log(word)
    } else {
        console.log(`${word} not found!`);
    }


}


console.log(stringSubstring('Java',
    'JavaScript is the best programming language'))