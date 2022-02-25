function serializeString(string) {

    let splitStr = string[0];
    let currentChar = [...new Set(string[0])].slice();
    
    let strL = splitStr.length;

    while (currentChar.length > 0) {
        let char = currentChar.shift();
        let indices = [];
 
        for (let i = 0; i < splitStr.length; i++) {
            if (char === splitStr[i]) {
                indices.push(i);
            }
        }
 
        console.log(char + ':' + indices.join('/'));
    }

}

serializeString(["abababa"]);