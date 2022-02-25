function charactersInRange(a, b) {

    let start = a.charCodeAt();
    let end = b.charCodeAt();



    function asciiCode(x, y) {

        let line = "";

        for (let i = x + 1; i < y; i++) {
            line += String.fromCharCode(i) + " ";
        }
        return line
    }



    return start > end ? asciiCode(end, start) : asciiCode(start, end);

}


let result = charactersInRange('C', '#');
console.log(result);