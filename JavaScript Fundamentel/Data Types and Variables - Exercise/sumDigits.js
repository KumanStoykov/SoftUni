function sumDigits(num) {

    let numStr = num.toString()
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        
        let num = Number(numStr[i]);

        sum += num;
        
    }

    console.log(sum);
}

sumDigits(245678);