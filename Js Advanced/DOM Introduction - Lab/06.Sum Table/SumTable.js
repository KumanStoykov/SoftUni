function sumTable() {

    let numbersFromTable = document.querySelectorAll('tr td:nth-child(2)');

    let sum = Array.from(numbersFromTable).pop();


    sum.textContent = Array.from(numbersFromTable).reduce((a, x) => a += Number(x.textContent), 0);

}