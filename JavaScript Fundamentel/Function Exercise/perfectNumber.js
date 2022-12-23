function perfectNumber(n) {

    function perfect(num) {
        let temp = 0;

        for (let index = 0; index < num; index++) {

            if (num % index === 0) {
                temp += index;

            }

        }
        return temp

    }

    function result(numer) {
        if (numer === n && numer !== 0) {
            return 'We have a perfect number!';
        } else {
            return `It's not so perfect.`;
        }
    }

    return result(perfect(n));

}

let result = perfectNumber(6);
console.log(result);