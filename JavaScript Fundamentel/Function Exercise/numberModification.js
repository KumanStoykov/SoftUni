function numberModification(num) {

    let number = num.toString().split("").map(Number);

    let sum = 0;
    
    
    while (sum < 100) {
        
        
        let count = number.length;

        sum = sumOfNum(number) / count;
        
        if(sum < 5) {
            number.push(9);

        } else if(sum > 5) {
            console.log(number.join(""));
            break;
        }
        
    }


    function sumOfNum(num) {

        return num
        .reduce((a, b) =>{
            return a + b;
        },0);

    }



}

numberModification(101);