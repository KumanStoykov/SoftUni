function diagonalAttack(input) {

    let inputL = input.length;
    let sumOne = 0;
    let sumTwo = 0;
    let halfInput = Math.floor(inputL / 2);
    let count = input.length - 1;
    let sortArr = [];

    for (let i = 0; i < inputL; i++) {
        let numbers = input[i].split(" ")

        for (let j = 0; j < numbers.length; j++) {
            let num = Number(numbers[j]);

            if (i === j) {
                sumOne += num;

            }

            if (count === j) {
                sumTwo += num;
                count--;
            }

        }

    }
    let countTwo = input.length - 1;

    for (let i = 0; i < inputL; i++) {
        let numbers = input[i].split(" ")
        let buff = "";

        for (let j = 0; j < numbers.length; j++) {
            let num = numbers[j];

            if (i === j) {
                buff += "" + num + " ";
                if (halfInput === j) {
                    countTwo--;
                }
            } else {

                if (countTwo === j) {
                    buff += "" + num + " ";
                    countTwo--;
                } else {
                    buff += "" + sumOne + " ";

                }
            }
        }

        sortArr.push(buff);


    }



    if (sumOne === sumTwo) {
        console.log(sortArr.join(" \n"));

    } else {
        console.log(input.join(" \n"));
    }



}


diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);