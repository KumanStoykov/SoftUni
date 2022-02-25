function condenseArrayToNumber(numbers) {

    let condensed = [];

    while (numbers.length > 1) {
        for(let i = 0; i < numbers.length - 1; i++) {
            let currentEl = numbers[i];
            let nextEl = numbers[i + 1];
            condensed.push(currentEl + nextEl);
        }

        numbers = condensed;
        condensed = [];
    }
    console.log(numbers[0]);




}
condenseArrayToNumber([5,0,4,1,2]);