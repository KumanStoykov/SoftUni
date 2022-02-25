function simpleCalculator(numOne, numTwo, operator) {


    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne, numTwo));
            break;
        case 'divide':
            result = numOne / numTwo;
            break;
        case 'add':
            result = numOne + numTwo;
            break;
        case 'subtract':
            result = numOne - numTwo;
            break;
    }

    console.log(result);

}
simpleCalculator(10, 5, 'subtract')