class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
    }
    shopping([productName, price]) {

        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.budget -= price;
        this.products.push(productName);
        return `You have successfully bought ${productName}!`;
    }
    recipes(obj) {
        let checkProducts = obj.productsList.every(el => this.products.includes(el));

        if (checkProducts) {
            this.dishes.push(obj);
            return `${obj.recipeName} has been successfully cooked!`;
        }
        throw new Error(`We do not have this product`);
    }
    inviteGuests(name, dish) {
        let checkDish = this.dishes.find(obj => dish == obj.recipeName);
        if (!checkDish) {
            throw new Error("We do not have this dish");
        }
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }
    showAttendance() {
        let output = [];
        Object.entries(this.guests).forEach(el => {
            let products = this.dishes.find(pro => pro.recipeName == el[1])

            output.push(`${el[0]} will eat ${el[1]}, which consists of ${(products.productsList).join(', ')}`);
        });
        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey', 'hoh']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Ivan', 'Oshwav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

