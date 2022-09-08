class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

}

function sortTickets(arrayOfTickets: Array<string>, criteria: string) {

    let inFormat: Array<object> = [];

    arrayOfTickets.forEach((x): void => {
        let splittedArr = x.split('|');
        let ticket = new Ticket(splittedArr[0], Number(splittedArr[1]), splittedArr[2]);
        inFormat.push(ticket);
    });

    let sortedArr = inFormat.sort((a, b) => (a[criteria] < b[criteria]) ? -1 : 1);

    return sortedArr;
}

sortTickets([

    'Philadelphia|94.20|available',
    
    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'
    
    ],
    
    'destination')