function asciiSumator(input) {

    let first = input[0].charCodeAt();
    let secund = input[1].charCodeAt();
    let start = Math.min(first,secund);
    let end = Math.max(first, secund);
    let str = input[2];
    let sum = 0;

    for (let char of str) {
        let charOfCode = char.charCodeAt();

        if(charOfCode > start && charOfCode < end) {
            sum += charOfCode;

        }
        
    }
    console.log(sum);
}



asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
);