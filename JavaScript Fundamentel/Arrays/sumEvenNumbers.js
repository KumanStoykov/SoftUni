function sumEvenNumbers(n) {



    let result = 0;

    for (let index = 0; index < n.length; index++) {
        n[index] = Number(n[index]);

    }

    for (let i = 0; i < n.length; i++) {
        let currentNum = n[i];

        if (currentNum % 2 === 0) {
            result += currentNum;
        }
    }
    console.log(result);


}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);