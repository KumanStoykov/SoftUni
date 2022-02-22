const testNumbers = require('./testNumbers');
const expect = require('chai').expect;

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('Should when type is not correct', () => {
            expect(testNumbers.sumNumbers('as', 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers(12, '1')).to.equal(undefined);
            expect(testNumbers.sumNumbers('as', '1')).to.equal(undefined);
            expect(testNumbers.sumNumbers([], {})).to.equal(undefined);
        });
        it('Should when sum is not correct', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(-1, 6)).to.equal('5.00');
            expect(testNumbers.sumNumbers(-1, -10)).to.equal('-11.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');           
        });
    });
    describe('numberChecker', () => {
        it('Should when type is not correct', () => {
            expect(() => testNumbers.numberChecker('as')).to.Throw('The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.Throw('The input is not a number!');
        });
        it('Should when is even', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
           expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
           expect(testNumbers.numberChecker(2000)).to.equal('The number is even!');
           expect(testNumbers.numberChecker(5000)).to.equal('The number is even!');
        });
        it('Should when is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
           expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
           expect(testNumbers.numberChecker(2001)).to.equal('The number is odd!');
           expect(testNumbers.numberChecker(5001)).to.equal('The number is odd!');
        });
    });
    describe('averageSumArray', () => {
        it('Should return correct sum', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 4, 5])).to.equal(3);
        });
    });

});