function calculator(firstNum, operator, secundNum) {

    let result = 0;

    if(operator === '+') {
        result = firstNum + secundNum;
    } else if(operator === '-') {
        result = firstNum - secundNum;
    } else if(operator === '/') {
        result = firstNum / secundNum;
    } else if(operator === '*') {
        result = firstNum * secundNum;
    }

    console.log(result.toFixed(2));

}
calculator(5,
    '+',
    10);