function calc() {
    const firstInputValue = document.querySelector('#num1').value;
    const secundInputValue = document.querySelector('#num2').value;

    document.querySelector('#sum').value = Number(firstInputValue) + Number(secundInputValue);
    
}
