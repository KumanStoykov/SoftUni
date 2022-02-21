class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transaction = {};
    }

    newCustomer(customer) {
        const person = this.allCustomers.find(c => c.personalId === customer.personalId);
        if (person) {
            throw new Error(`${person.firstName} ${person.lastName} is already our customer!`);
        }
        const id = customer.personalId;
        this.transaction[id] = [];
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        const person = this.allCustomers.find(c => c.personalId === personalId);

        if (!person) {
            throw new Error(`We have no customer with this ID!`);
        }
        if (person.hasOwnProperty('totalMoney')) {

            person.totalMoney += amount;
        } else {
            person.totalMoney = amount;
        }
        this.transaction[personalId].push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`);
        return `${person.totalMoney}$`;
    }
    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        const person = this.allCustomers.find(c => c.personalId === personalId);

        if (!person) {
            throw new Error(`We have no customer with this ID!`);
        }
        if (person.totalMoney < amount || !(person.hasOwnProperty('totalMoney'))) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
        }
        
        this.transaction[personalId].push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`);
        person.totalMoney -= amount;
        return `${person.totalMoney}$`;
    }
    customerInfo(personalId) {
        personalId = Number(personalId);
        const person = this.allCustomers.find(c => c.personalId === personalId);
        
        if (!person) {
            throw new Error(`We have no customer with this ID!`);
        }
        const output = [`Bank name: ${this._bankName}`,
         `Customer name: ${person.firstName} ${person.lastName}`,
         `Customer ID: ${personalId}`,
         `Total Money: ${person.totalMoney}$`,
         `Transactions:`
        ];
       const reverseTransaction = this.transaction[personalId].reverse();
       let count = this.transaction[personalId].length;
       reverseTransaction.forEach(p => output.push(`${count--}. ${p}`));

       return output.join('\n');
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
