function bitcoinMining(input) {

    let gold = input.length

    const bitcoin = 11949.16;
    const goldPrice = 67.51;
    let goldTotal = 0;
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 1; i <= gold; i++) {
        let comeGold = Number(input[i - 1]);

        let sumGold = comeGold * goldPrice;

        if (i % 3 === 0) {
            sumGold *= 0.70;
        }

        goldTotal += sumGold;

        if (sumGold > bitcoin) {
            if (min > i) {
                min = i;
            }
        }
    }


    let bought = parseInt(goldTotal / bitcoin);

    console.log(`Bought bitcoins: ${bought}`);

    if (bought > 0) {
        console.log(`Day of the first purchased bitcoin: ${min}`);
    }

    console.log(`Left money: ${(goldTotal - (bitcoin * bought)).toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300]);