function coffeeLover(input) {

    let listOfCoffee = input.shift().split(" ");
    let countCommand = Number(input.shift());

    for(let i = 0; i < countCommand; i++) {
        let [command, ...arg] = input[i].split(" ");

        if(command === "Include") {
            let [coffee] = arg;
            listOfCoffee.push(coffee);
        } else if(command === "Remove") {
            let [firstLast, numOfCoffees] = arg;
            numOfCoffees = Number(numOfCoffees);
            let lisL = listOfCoffee.length - 1;
            if(lisL >= numOfCoffees && numOfCoffees >= 0) {

                if(firstLast === "first") {
                    listOfCoffee.splice(0, numOfCoffees);
                } else {
                    let startNum = listOfCoffee.length - numOfCoffees;
                    listOfCoffee.splice(startNum, numOfCoffees);
                }

            }

            
        } else if (command === "Prefer") {
            let [firstIndex, secundIndex] = arg.map(Number);
            let lisL = listOfCoffee.length - 1;

            if(lisL >= firstIndex && 0 <= firstIndex && lisL >= secundIndex && 0 <= secundIndex) {

                [listOfCoffee[firstIndex], listOfCoffee[secundIndex]] = [listOfCoffee[secundIndex], listOfCoffee[firstIndex]];
            }

        } else if (command === "Reverse") {
            listOfCoffee.reverse();
        }


    }

    console.log(`Coffees: `);
    console.log(listOfCoffee.join(" "));


}


coffeeLover((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 5",
"Prefer 5 0",
"Reverse"])
);