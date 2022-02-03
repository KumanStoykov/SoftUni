function solution() {

    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    let recipes = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    function manager(input) {
        let [command, name, quantity] = input.split(' ');
        quantity = Number(quantity);

        const restock = function (elements, quantity) {
            microElements[elements] += quantity;
            return 'Success';
        }
        const prepare = function (recipe, quantity) {
            quantity = Number(quantity);

            for (const key in recipes[recipe]) {
                let total = recipes[recipe][key] * quantity;

                if (total > microElements[key]) {
                    return `Error: not enough ${key} in stock`;
                }
            }
            Object.keys(recipes[recipe]).forEach(el => {

                if (recipes[recipe][el] > 0) {
                    microElements[el] -= recipes[recipe][el] * quantity;
                }
            });

            return 'Success';
        }
        const report = function () {
            return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
        }

        if (command == 'restock') {
            return restock(name, quantity);
        } else if (command == 'prepare') {
            return prepare(name, quantity);
        }
        return report();
    }

    return manager;
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
