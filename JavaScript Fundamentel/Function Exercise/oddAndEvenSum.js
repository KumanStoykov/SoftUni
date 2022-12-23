function oddAndEvenSum(n) {

    let digitArr = splitNumber(n);
    let sums = arrSum(digitArr);
    let res = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;


    function splitNumber(num) {
        return num.toString().split('');
    }

    function arrSum(arr) {

        let oddSum = 0;
        let evenSumn = 0;

        for (let n of arr) {
            n = Number(n);
            if (n % 2 === 0) {
                evenSumn += n;
            } else {
                oddSum += n;
            }
        }
        return [evenSumn, oddSum];

    }

    return res;

}

let result = oddAndEvenSum(1000435);
console.log(result);