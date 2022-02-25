function furniture(input) { 

    let totalSum = 0;

    console.log("Bought furniture:")
    for (let line of input) {
        const pattern = />>(?<name>.+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/g;
        
        const matches = pattern.exec(line);

        if(matches) {
            let {name, price, quantity} = matches.groups;
            
            console.log(name);
            totalSum += (Number(price)) * (Number(quantity));

        }
        
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]);
