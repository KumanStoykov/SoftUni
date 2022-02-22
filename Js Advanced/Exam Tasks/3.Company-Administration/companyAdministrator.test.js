const companyAdministration = require('./companyAdministration');
const expect = require('chai').expect;

describe('companyAdministrator', () => {
    describe('hiringEmployee', () => {
        it('Should when is not for this work', () => {
            expect(() => companyAdministration.hiringEmployee('John', 'Seller', 2)).to.throw(Error,`We are not looking for workers for this position.`);
        });
        it('Should when is correct for this position with 3 years experience', () => {
            expect(companyAdministration.hiringEmployee('John', 'Programmer', 3)).to.equal(`John was successfully hired for the position Programmer.`);
        });
        it('Should when is correct for this position with lass then 3 years experience', () => {
            expect(companyAdministration.hiringEmployee('John', 'Programmer', 2)).to.equal(`John is not approved for this position.`);
        });
        it('Should when is correct for this position but with negative number for experience', () => {
            expect(companyAdministration.hiringEmployee('John', 'Programmer', -1)).to.equal(`John is not approved for this position.`);
        });
    });
    describe('calculateSalary', () => {
        it('Should when is not  valid input', () => {
            expect(() => companyAdministration.calculateSalary('a')).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary('160')).to.throw(Error, "Invalid hours");
        });
        it('Should when hours is more then 160 ', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);           
        });
        it('Should when hours is equal 160 ', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);           
        });        
    });
    describe('firedEmployee', () => {
        it('Should when input is not correct', () => {
            expect(() => companyAdministration.firedEmployee('dasd', 1)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1.5)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 4)).to.throw(Error, "Invalid input");
        });
        it('Should when all is correct', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal('Petar, Ivan');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });
    });
});