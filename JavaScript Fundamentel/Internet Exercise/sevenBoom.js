function sevenBoom(numbers) {

    let isCorrect = false;

    for (let num of numbers) {

        let [firstNum, secundNum] = num.toString().split("");

        firstNum = Number(firstNum);
        secundNum = Number(secundNum);

        if(firstNum === 7 || secundNum === 7) {
            isCorrect = true;
            return "Boom!";

        }
        
    }

    if(!isCorrect) {
        return "there is no 7 in the array";
    }

}
sevenBoom(([2, 55, 60, 97, 86]));