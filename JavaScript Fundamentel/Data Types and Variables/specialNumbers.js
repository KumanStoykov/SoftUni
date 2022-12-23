function specialNumbers(n) {



    for (let i = 1; i <= n; i++) {
        let currentNum = Number(i);

        let num = currentNum % 10;
        let total = parseInt(currentNum / 10);
        let sum = num + total;

     
        if (sum === 5) {
            console.log(`${i} -> True`);
        } else if (sum === 7) {
            console.log(`${i} -> True`);
        } else if (sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }



}
specialNumbers(25);