function reverseAnArrayOfStrings(str) {

    
    let newText = [];

    for(let i = str.length - 1; i >= 0; i--){
        newText.push(str[i]);
    }

    console.log(newText.join(" "));

}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);