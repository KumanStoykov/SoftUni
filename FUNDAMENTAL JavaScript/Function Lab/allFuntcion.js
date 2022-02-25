function allFunction(grade, numOne, numTwo, operator, str,n) {

    grades(grade);
    repeatString(str,n);
    simpleCalculator(numOne, numTwo,operator);

    function grades(grade) {

        let description = '';

        if (grade >= 3 && grade < 3.50) {
            description = 'Poor';
        } else if (grade < 4.50) {
            description = 'Good';
        } else if (grade < 5.50) {
            description = 'Very good';
        } else {
            description = 'Excellent'
        }

        if (grade < 3) {
            console.log('Fail (2)');
        } else {
            console.log(`${description} (${grade.toFixed(2)})`);
        }
    }


    function repeatString(str, n) {

        let result = "";

        for (let index = 0; index < n; index++) {


            result += str;
        }

        console.log(result);

    }



    function simpleCalculator(numOne, numTwo, operator) {


        switch (operator) {
            case 'multiply':
                result = numOne * numTwo;
                return;
            case 'divide':
                result = numOne / numTwo;
                return;
            case 'add':
                result = numOne + numTwo;
                return;
            case 'subtract':
                result = numOne - numTwo;
                break;
        }

        console.log(result);

    }


}

allFunction(4, 10, 5, 'subtract', "abc", 3);