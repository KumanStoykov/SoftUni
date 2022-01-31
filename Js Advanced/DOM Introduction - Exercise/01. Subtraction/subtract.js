function subtract() {
    let firstNum = document.querySelector('#firstNumber').value;
    let secundNum = document.querySelector('#secondNumber').value;

    document.querySelector('#result').textContent = Number(firstNum) - Number(secundNum);
       
}