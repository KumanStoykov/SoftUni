function processOddNumbers(arr) {

    let numbers = arr
    .filter((num, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse();


    return numbers.join(' ');
}
console.log(processOddNumbers([10, 15, 20, 25]));