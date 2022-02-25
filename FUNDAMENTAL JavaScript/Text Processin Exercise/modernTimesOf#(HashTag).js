function modernTimesOf(str) {

    let words = str.split(' ');

    for (let word of words) {
        
        if(word.startsWith('#') && isOnlyLetters(word.substring(1)) && word.substring(1) !== '') {
            console.log(word.substring(1));
        }
    }

    function isOnlyLetters(w) {
        let isLetter = true;

        for (let char of w) {
            let code = char.charCodeAt();
            if(code < 65 || code > 90 && code < 97 || code > 122) {
                isLetter = false;
                break;
            }
        }
        return isLetter;
    }


}

modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia');