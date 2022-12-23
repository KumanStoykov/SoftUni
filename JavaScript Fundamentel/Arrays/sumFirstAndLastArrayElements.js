function sumFirstAndLastArrayElements(input) {

    let firstnum = Number(input[0]);
    let secondnum = Number(input[input.length - 1]);

    let sum = firstnum + secondnum;

    console.log(sum);



}

sumFirstAndLastArrayElements([20, 30, 40]);