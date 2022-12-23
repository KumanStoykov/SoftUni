function integerAndFloat(firstNum, secondNum, thirdNum){

    let sum = Number(firstNum + secondNum + thirdNum);

    console.log(sum % 1 === 0 ? 
        `${sum} - Integer`
        : `${sum} - Float`);


}
integerAndFloat(9, 100, 1.1);