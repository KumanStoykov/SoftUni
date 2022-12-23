function blackFlag(input) {

    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let sum = 0;

    for(let i = 1; i <= days; i++) {

        sum += dailyPlunder;

        if(i % 3 === 0) {
            sum += dailyPlunder * 0.50;

        } 
        if(i % 5 === 0) {
            sum -= sum * 0.30;

        }
    }

    if(expectedPlunder <= sum ) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let sumPercent = expectedPlunder - sum;
        let percent = (sum / expectedPlunder) * 100;
        console.log(`Collected only ${(percent.toFixed(2))}% of the plunder.`);
    }



}

blackFlag(["10",
"20",
"380"]);