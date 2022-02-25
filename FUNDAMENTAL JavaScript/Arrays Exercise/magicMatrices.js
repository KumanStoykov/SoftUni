function magicMatrices(inputNums) {

    let result = 0;
    let firstResult = inputNums.slice(0, 1).toString().split(",").map(Number).reduce((a, b) => a + b);

    for (let nums of inputNums) {
        let [first, secund, third] = nums.toString().split(",").map(Number);

        result += first + secund + third;


    }

    let sum = result / 3;

    if(sum === firstResult) {
        return true;
    } else {
        return false;
    }


}


    console.log(magicMatrices([[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]));



// console.log(magicMatrices([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]
// ]));