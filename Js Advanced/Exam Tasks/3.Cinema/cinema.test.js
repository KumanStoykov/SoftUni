const cinema = require('./cinema');
const expect = require('chai').expect;

describe('Cinema', () => {
    describe('Show Movies', () => {

        it('Should when array length is zero', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('Should when return films from array', () => {
            expect(cinema.showMovies([`King Kong`, `The Tomorrow War`, 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
    });
    describe('Ticket Price', () => {
        it('Should when is incorrect projection', () => {
            expect(() => cinema.ticketPrice('notNormal')).to.throw(Error, 'Invalid projection type.');
        });
        it('Should when is premiere schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it('Should when is normal schedule', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it('Should when is discount schedule', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });
    describe('Swap seat in hall', () => {
        it('Should when is not integer', () => {
            expect(cinema.swapSeatsInHall(20.5, 10)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 10.5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20.5, 10.5)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('Should when is place is more from capacity ', () => {
            expect(cinema.swapSeatsInHall(21, 19)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 30)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(40, 30)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('Should when is place less then capacity', () => {
            expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1, -12)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('Should when is are two number is equal', () => {
            expect(cinema.swapSeatsInHall(20, 20)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('Should when all two number is correct', () => {
            expect(cinema.swapSeatsInHall(20, 10)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(19, 2)).to.equal("Successful change of seats in the hall.");
        });
    });
});