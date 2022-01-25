function aggregateElements(input) {
    console.log(sum(input));
    console.log(sumOfInverse(input));
    console.log(concat(input));

    function sum(input) {
        return input.reduce((a, x) => a += x, 0);
    }

    function sumOfInverse(inputArr) {
        return inputArr.map(el => 1 / el).reduce((a, x) => a += x);
    }

    function concat(inputArr) {
        return inputArr.join('');
    }

}


aggregateElements([1, 2, 3]);