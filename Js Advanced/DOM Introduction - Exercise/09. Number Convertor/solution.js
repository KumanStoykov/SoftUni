function solve() {
   
    // Add new option to Select tag
    let insert = ['hexadecimal', 'binary'];

    for (const value of insert) {
        
        const creatOptionElement = document.createElement('option');
        creatOptionElement.textContent = value;
        document.querySelector('#selectMenuTo').appendChild(creatOptionElement);
    }
    

    document.querySelector('button').addEventListener('click', handlerButton);
    
    // add event listener with two function
    function handlerButton() {

        const inputNumber = document.querySelector('#input').value;
        const getToStatus = document.querySelector('#selectMenuTo').value;
        if(getToStatus === 'hexadecimal') {
            document.querySelector('#result').value = makeHexadecimal(inputNumber);
        } else if (getToStatus === 'binary'){
         document.querySelector('#result').value  = makeBinary(inputNumber);
        }
        

    }

    function makeHexadecimal(num) {

        let result = [];

        while (num >= 1) {
            let hex = Math.floor(num % 16);
            num = Math.floor(num / 16);
            if (hex > 9) {
                switch (hex) {
                    case 10:
                        hex = 'A';
                        break;
                    case 11:
                        hex = 'B';
                        break;
                    case 12:
                        hex = 'C';
                        break;
                    case 13:
                        hex = 'D';
                        break;
                    case 14:
                        hex = 'E';
                        break;
                    case 15:
                        hex = 'F';
                        break;
                }
                result.push(hex)
    
            } else {
                result.push(hex);
    
            }
        }
        return result.reverse().join('');

    }

    function makeBinary(num) {
        let result = [];

        while (num >= 1) {
            result.push(num % 2);
            num -= Math.ceil(num / 2);
        }
        return result.reverse().join('');
    }

 
}