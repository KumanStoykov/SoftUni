class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice) < 0 ? 0: Number(ticketPrice);
        this.screenings = [];
        this.totalSoldTickets = 0;
        this.profit = 0;
    }
    newScreening(date, hall, description) {
        const currentHall = this.screenings.find(h => (h.hall == hall && h.date == date));

        if (currentHall) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        this.screenings.push({ date, hall, description });
        return `New screening of ${this.movieName} is added.`;
    }
    endScreening(date, hall, soldTickets) {
        soldTickets = soldTickets < 0 ? 0 : Number(soldTickets);
        const currentHall = this.screenings.find(h => (h.hall == hall && h.date == date));

        if (!currentHall) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        this.screenings.splice(this.screenings.findIndex(h => (h.hall == hall && h.date == date)), 1);
        this.totalSoldTickets += soldTickets;
        this.profit += this.ticketPrice * soldTickets;
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${this.ticketPrice * soldTickets}`;
    }
    toString() {
        const output = [`${this.movieName} full information:`,
        `Total profit: ${(this.profit).toFixed(0)}$`,
        `Sold Tickets: ${(this.totalSoldTickets).toFixed(0)}`
        ];
        if(this.screenings.length > 0) {
            output.push(`Remaining film screenings:`);
            this.screenings
            .sort((a, b) => a.hall.localeCompare(b.hall))
            .forEach(h => output.push(`${h.hall} - ${h.date} - ${h.description}`));
        } else {
            output.push(`No more screenings!`);
        }
        return output.join('\n');
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', -12));
console.log(m.endScreening('October 3, 2020', 'Main', 0));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
