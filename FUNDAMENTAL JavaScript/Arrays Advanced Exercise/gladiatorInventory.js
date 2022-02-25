function gladiatorInventory(input) {

    let inventory = input.shift().split(" ");

    for (let info of input) {

        let [command, ...arg] = info.split(" ");

        if(command === "Buy") {
            let [item] = arg;

            if(!inventory.includes(item)) {
                inventory.push(item);
            }

        } else if(command === "Trash") {
            let [item] = arg;

            let indexOf = inventory.indexOf(item);

            if(indexOf !== -1) {
                inventory.splice(indexOf, 1);
            }

        }else if(command === "Repair") {

            let [item] = arg;

            if(inventory.includes(item)) {
                let indexOfItem = inventory.indexOf(item);
                if(indexOfItem !== -1) {
                    inventory.splice(indexOfItem, 1);
                    inventory.push(item);

                }
            }

        } else if (command === "Upgrade") {
            let [itemArg] = arg;
            let [item, material] = itemArg.split("-");

            if(inventory.includes(item)) {
                let indexOfItem = inventory.indexOf(item);
                let formatUpdate = `${item}:${material}`;
                inventory.splice(indexOfItem + 1, 0, formatUpdate);
            }

        }
        
    }

    return inventory.join(" ");




}

console.log(gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']));