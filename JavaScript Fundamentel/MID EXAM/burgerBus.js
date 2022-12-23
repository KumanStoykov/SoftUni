function burgerBus(input) {

    let count = 0;
    let totalSum = 0;
    let inputL = input.length - 1;

    for (let i = 1; i < inputL; i += 3) {
        let name = input[i];
        let income = Number(input[i + 1]);
        let expenses = Number(input[i + 2]);

        count++

        if (count % 5 === 0) {
            income = income * 0.90;
            
        }else if (count % 3 === 0) {
            expenses = expenses * 1.50;
        }
        let result = income - expenses;
        totalSum += (income - expenses);
        console.log(`In ${name} Burger Bus earned ${result.toFixed(2)} leva.`);

    }
    console.log(`Burger Bus total profit: ${totalSum.toFixed(2)} leva.`);
}


burgerBus((["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"]));
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])

 