function inventurySolve(input) {

    let inventury = input.shift().split(", ");


    for (let line of input) {
        let [command, item] = line.split(" - ");

        if (command === "Collect") {
            if(!inventury.includes(item)) {
                inventury.push(item);

            }
        } else if (command === "Drop") {
            if (inventury.includes(item)) {
                let indexOfItem = inventury.indexOf(item);
                inventury.splice(indexOfItem, 1);
            }
        } else if (command === "Combine Items") {
            let [firstItem, secundItem] = item.split(":");
            if(inventury.includes(firstItem)) {
                let indexOfItem = inventury.indexOf(firstItem);
                inventury.splice(indexOfItem + 1, 0, secundItem);
            }
        } else if (command === "Renew") {
            if(inventury.includes(item)){

                let indexOfItem = inventury.indexOf(item);
                inventury.splice(indexOfItem, 1);
                inventury.push(item);
            }
        } else if (command === "Craft") {

            break;
        }
    }

    console.log(inventury.join(", "));

}

inventurySolve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);