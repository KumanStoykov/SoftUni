function sameNumbers(numbers) {

    let sum = numbers.toString()
    .split('')
    .map(Number)
    .reduce((a, x) => a += x);
    let trueOrFalse = [...new Set(numbers.toString())].length === 1 ? true : false;

    console.log(trueOrFalse);
    console.log(sum);


}


sameNumbers(2222222);