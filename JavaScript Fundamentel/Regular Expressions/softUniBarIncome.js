function softUniBarIncome(input) {

    let totalSum = 0;


    for (let info of input) {
        
        let pattern = /%(?<name>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>[\w]+)>(?:[^\|\$%\.]+)?\|(?<quantity>[\d]+)\|(?:[^\|\$%\.\d]+)?(?<price>[0-9]+\.?[\d]+)\$/g;
        let matches = pattern.exec(info);
        if (matches) {
            let {
                name,
                product,
                quantity,
                price
            } = matches.groups;

            let purchaseTotal = Number(quantity) * Number(price);
                
            
            console.log(`${name}: ${product} - ${purchaseTotal.toFixed(2)}`);
            totalSum += purchaseTotal;
              

        }


    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

softUniBarIncome(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);