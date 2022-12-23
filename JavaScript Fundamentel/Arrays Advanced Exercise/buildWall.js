function buildWall(input) {

    const OneFootOfPeso = 1900;
    input = input.map(Number);
    let cubic = 195;

    let inputL = input.length;
    let arrSum = [];
    let sum = 0;
    let sorted
    




    while (input[0] !== 30) {


        for (let j = 0; j < inputL; j++) {
            let wall = input[j];

            if (wall < 30) {
                sum += cubic;
                input[j] = input[j] + 1;


            }
        }

        sorted = input.sort((a, b) => a - b);

        


        arrSum.push(sum);

        sum = 0;

    }

    let totalSum = arrSum.reduce((acc, el) => {
        return acc + el;
    }, 0);

    console.log(arrSum.join(", "));
    console.log(`${totalSum * OneFootOfPeso} pesos`);


}

buildWall([21, 25, 28]);