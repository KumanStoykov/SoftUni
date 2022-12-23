function findEvenIndex(numbers) {

    let sumLeft = 0;
    let sumRight = 0;
    let inputL = numbers.length;
    let isCorrect = false;
    
    for(let i = 0; i < inputL;i++) {
        let numLeft = numbers[i];
        sumLeft += numLeft;
        for(let j = i; j < inputL; j++) { 
            let numRight = numbers[j];
            sumRight += numRight;
            
        }
        
        if(sumLeft === sumRight) {
            isCorrect = true;
            return i;
        }

        sumRight = 0;

    }

    if(!isCorrect) {
        
        return "-1";

    }



}


console.log(findEvenIndex([1,2,3,4,5,6]));