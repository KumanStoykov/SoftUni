const numberOperations = require('./numberOperations');
const expect = require('chai').expect;

describe('Number Operation', () => {
    describe('powNumber', () => {
        it('Should when is correct', () => {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
        it('Test with 0', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });
    describe('numberChecker', () => {
        it('Should when is not correct input', () => {
            expect(() => numberOperations.numberChecker('dasd')).to.throw(Error, 'The input is not a number!');
            expect(() => numberOperations.numberChecker({})).to.throw(Error, 'The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');
        });
        it("Should when is input less then 100", () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(50)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');

        });
        it("Should when is input more or equal to 100", () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(200)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100000)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!');

        });
    });
    describe('sumArrays', () => {
        it('Should when sum is not correct', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 3, 5, 6])).to.eql([2, 5, 8, 6]);
        });
    });
});