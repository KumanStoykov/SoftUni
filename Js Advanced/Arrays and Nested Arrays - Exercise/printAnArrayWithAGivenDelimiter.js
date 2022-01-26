function printAnArrayWithAGivenDelimiter(arr, delimiter) {

    return arr.map((el, index) => {
        if(arr.length - 1 === index) {
            return el;
        }
        return el + delimiter;
    }).join('');

}
console.log(printAnArrayWithAGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'));