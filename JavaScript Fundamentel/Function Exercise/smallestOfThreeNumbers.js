function smallestNumbers(a, b, c) {

    let min = Number.MAX_SAFE_INTEGER

    for (const n of arguments) {
        smallNum(n);
    }


    function smallNum(n) {
        if (n < min) {
            min = n;
        }
    }

    return min;

}
let result = smallestNumbers(2, 5, 3);
console.log(result);