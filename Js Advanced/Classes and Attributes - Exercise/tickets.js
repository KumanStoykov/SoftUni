function sortTickets(inputArr, command) {

    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;            
        }
    }
    
    let enginCommander = {
        destination(input) {
            return input.sort((a, b) => a.destination.localeCompare(b.destination));
        },
        price(input) {
            return input.sort((a, b) => a.price - b.price);
        },
        status(input) {
            return input.sort((a, b) => a.status.localeCompare(b.status));
        }
    }

    let newArr = inputArr.map(line => {
        let [destinationName, price, status] = line.split('|');
        return new Ticket(destinationName, Number(price), status);
    });

    return enginCommander[command](newArr);


}

let ticket = sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);
console.log(ticket)