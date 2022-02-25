function palindromeIntegers(arr) {


    function isPalindrome(n) {

        let reversion = n.toString().split('').reverse().join('');
        return Number(reversion) === n ? true : false;

    }

    let printLines = '';
    
    for (let i = 0; i < arr.length; i++) {

        printLines += isPalindrome(arr[i]) + '\n';
    }

    return printLines;

    
}
let result = palindromeIntegers([123, 323, 421, 121]);
console.log(result);