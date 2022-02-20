class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        for (let product of products) {
            let [name, quantity, totalPrice] = product.split(' ');
            quantity = Number(quantity);
            totalPrice = Number(totalPrice);

            if (this.budgetMoney >= totalPrice && !Object.keys(this.stockProducts).includes(name)) {
                this.stockProducts[name] = quantity;
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else if (this.budgetMoney >= totalPrice && this.stockProducts.hasOwnProperty(name)) {
                this.stockProducts[name] += quantity;
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`);

            } else if (this.budgetMoney < totalPrice) {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }
        return this.history.join('\n');
    }
    addToMenu(meal, neededProducts, price) {
        price = Number(price);

        if (!this.menu.hasOwnProperty(meal)) {
            const product = neededProducts.reduce((a, x) => {
                let [name, quantity] = x.split(' ');
                quantity = Number(quantity);

                a[name] = quantity;
                return a;
            }, {});

            this.menu[meal] = {
                products: product,
                price,
            };
            const menuLength = Object.keys(this.menu).length;
            if (menuLength === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }            
            return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in the our menu, try something different.`;
    }
    showTheMenu() {
        const output = [];
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        Object.keys(this.menu).forEach(el => output.push(`${el} - $ ${this.menu[el].price}`));
        return output.join('\n');
    }
    makeTheOrder(meal) {
        
 
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const checkForProduct = Object.keys(this.menu[meal].products).some(el => this.menu[meal].products[el] <= this.stockProducts[el]);        

        if ((!checkForProduct)) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budgetMoney += this.menu[meal].price;
        Object.keys(this.menu[meal].products).forEach(el => this.stockProducts[el] -= this.menu[meal].products[el]);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('frozen', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Yogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Cola', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozena'));
console.log(kitchen.makeTheOrder('Yogurt'));
console.log(kitchen.makeTheOrder('frozenYogurta'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
