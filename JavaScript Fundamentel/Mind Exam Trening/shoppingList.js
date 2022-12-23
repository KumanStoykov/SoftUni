function shoppingList(input) {

    let originalInput = input.slice();

    let shoppingList = input.shift().split("!");

    while(input[0] !== "Go Shopping!") {
        let [command, ...arg] = input.shift().split(" ");

        if(command === "Urgent") {
            let [item] = arg;
            if(!shoppingList.includes(item)) {
                shoppingList.unshift(item);
            } 
        } else if (command === "Unnecessary"){
            let [item] = arg;

            if(shoppingList.includes(item)) {
                let index = shoppingList.indexOf(item);
                shoppingList.splice(index, 1);
            }

        } else if (command === "Correct") {
            let [oldItem, newItem] = arg;

            if(shoppingList.includes(oldItem)) {
                let index = shoppingList.indexOf(oldItem);
                shoppingList.splice(index, 1, newItem);
            }

        } else if (command === "Rearrange") {
            let [item] = arg;

            if(shoppingList.includes(item)) {
                let index = shoppingList.indexOf(item);
                shoppingList.splice(index, 1);
                shoppingList.push(item);
            }
        }

    }

    console.log(shoppingList.join(", "));



}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Milk",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);