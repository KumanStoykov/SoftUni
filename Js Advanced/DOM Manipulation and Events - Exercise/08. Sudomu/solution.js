function solve() {

    const inputs = document.querySelectorAll('[type="number"]');
    let table = document.querySelector('table');
    let para = document.querySelectorAll('#check p')[0];
    let isWin = true;

    document.querySelectorAll('button')[0].style.cursor = 'pointer';
    document.querySelectorAll('button')[1].style.cursor = 'pointer';

    
    document.querySelectorAll('button')[0].addEventListener('click', checkTable);

    function checkTable() {
        
        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];
        for(let i = 1; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if(col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isWin = false;
                break;
            }
        }
        

        

        if (isWin) {
            table.style.border = '2px solid green';
            para.textContent = "You solve it! Congratulations!"
            para.style.color = 'green';

        } else {
            para.textContent = "NOP! You are not done yet...";
            para.style.color = 'red';
            table.style.border = '2px solid red';
        }
    }

    document.querySelectorAll('button')[1].addEventListener('click', reset);

    function reset() {
        [...inputs].forEach(el =>  el.value = '');
        para.textContent = '';
        table.style.border = 'none';

    }
}