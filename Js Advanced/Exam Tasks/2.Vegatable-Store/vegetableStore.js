class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = []; 
    }
    loadingVegetables(vegetables) {
        let veges = new Set();
        vegetables.map(veg => {
            let [type, quantity, price] = veg.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            const checkProduct = this.availableProducts.find(p => p.type == type );
            veges.add(type);

            if(checkProduct){
                checkProduct.quantity += quantity;
                if(checkProduct.price < price) {
                    checkProduct.price = price;
                }
            } else {
                this.availableProducts.push({type, quantity, price});
            }
        });
        return `Successfully added ${[...veges].join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.map(p => {
            let [type, quantity] = p.split(' ');
            quantity = Number(quantity);
            const checkProduct = this.availableProducts.find(p => p.type == type );

            if(!checkProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if(checkProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            totalPrice += (checkProduct.price * quantity);
            checkProduct.quantity -= quantity;            
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        const checkProduct = this.availableProducts.find(p => p.type == type );

        if(!checkProduct) {
            throw new Error(`${type} is not available in the store.`);
        }
        if(checkProduct.quantity < quantity) {
            checkProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        checkProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }
    revision() {
        const output = [`Available vegetables:`];
        this.availableProducts.sort((a, b) =>a.price - b.price)
        .forEach(a => output.push(`${a.type}-${a.quantity}-$${a.price}`));
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return output.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


